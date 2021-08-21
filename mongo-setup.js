var cfg = {
  _id: "rs0",
  members: [
    {
      _id: 0,
      host: "mongo1:27017",
      priority: 2,
    },
    {
      _id: 1,
      host: "mongo2:27017",
      priority: 0,
    },
    {
      _id: 2,
      host: "mongo3:27017",
      priority: 0,
    },
  ],
};
rs.initiate(cfg, { force: true });
rs.status();

// use admin;
// admin = db.getSiblingDB("admin");
// db.createUser({
//   user: "test",
//   pwd: "123456",
//   roles: [
//     { role: "userAdminAnyDatabase", db: "admin" },
//     "readWriteAnyDatabase",
//   ],
// });
// db.getSiblingDB("admin").auth("test", "123456");
// rs.status();
