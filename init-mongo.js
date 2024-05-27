adminDb = db.getSiblingDB('admin');
adminDb.createUser(
    {
        user: "dev",
        pwd: "Testing@54321",
        roles: [
            {
                role: "readWrite",
                db: "sig"
            },
            {
                role: "readWrite",
                db: "messaging"
            },
            {
                role: "readWrite",
                db: "messagingv2"
            }
        ]
    }
)