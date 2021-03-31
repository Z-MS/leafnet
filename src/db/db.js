var db;

export default {
	async getDb() {
		return new Promise((resolve, reject) => {
			var request = indexedDB.open("leafnet");

			request.onerror = function(event) {
				console.error("Error encountered while creating DB");
				reject('Error' + event);
			};

			request.onsuccess = function(event) {
				db = event.target.result;
				resolve(db)
			};

			request.onupgradeneeded = function(event) {
				console.log('upgrading...');
				// REMEMBER THIS
				// var db = event.target.result;
				db = event.target.result;

				if(event.oldVersion < 1) {
					db.createObjectStore("Notes", { autoIncrement: true, keyPath: 'id' });
				}
			}
		});
	},
	async getItems(store) {
		var items = [];
		db = await this.getDb();

		return new Promise(resolve => {
			var transaction = db.transaction(store, "readonly");
			transaction.oncomplete = function() {				
				resolve(items)
			};
			
			var objStore = transaction.objectStore(store);

			objStore.getAll().onsuccess = function(event) {
				items = event.target.result;
			};
		});
	},
	async addItem(store, item) {
		db = await this.getDb();

		return new Promise(resolve => {
			var transaction = db.transaction(store, "readwrite");
			transaction.oncomplete = function() {
				resolve();
			};
			var objStore = transaction.objectStore(store);
			objStore.add(item);
		});
	},
	async editItem(store, itemID) {
		db = await this.getDb();

		return new Promise(resolve => {
			var transaction = db.transaction(store, "readwrite");
			transaction.oncomplete = function() {
				resolve();
			};

			var objStore = transaction.objectStore(store);
			var req = objStore.get(itemID);
			req.onsuccess = function() {
				const data = req.result;
				const update = objStore.put(data); // update the data in the object store
				update.onsuccess = function() {
					console.log("success!");
				};
			};
		});
	},
	async deleteItem(store, itemID) {
		db = await this.getDb();

		return new Promise(resolve => {
			var transaction = db.transaction(store, "readwrite");
			transaction.oncomplete = function() {
				resolve();
			}

			var objStore = transaction.objectStore(store);
			var req = objStore.get(itemID);
			req.onsuccess = function(event) {
				console.log("Record: ", event.target.result);

				req = objStore.delete(itemID);
				req.onsuccess = function(event) {
					console.log("delete successful: ", event.target.result);
				}

				req.onerror = function(event) {
					console.log("ERRORZ: ", event.target.errorCode);
				}
			}

			req.onerror = function(event) {
				console.error("ERRORZ: ", event.target.errorCode);
			}
		})
	}
	
}
