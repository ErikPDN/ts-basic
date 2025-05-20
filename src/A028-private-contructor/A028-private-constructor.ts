// Singleton pattern with private constructor
export class DataBase {
  private static db: DataBase;

  private constructor(private host: string, private port: number, private password: string) {
  }

  // Factory method to create or return the singleton instance
  static getInstance(host: string, port: number, password: string): DataBase {
    if (DataBase.db) {
      return DataBase.db;
    }

    DataBase.db = new DataBase(host, port, password);
    return DataBase.db;
  }
}

const db1 = DataBase.getInstance('localhost', 5432, 'password');
const db2 = DataBase.getInstance('localhost', 3306, 'password');

console.log(db1 === db2); // true
