
# Run the application using docker and docker-compose
- Make sure These values are set. unless you won't be able to sign in
  - ADMIN_NAME: "Admin"
  - ADMIN_EMAIL: "admin@metarainbow.com"
  - ADMIN_PASSWORD: "admin"
- Seeding the database with this admin user, as well as 20 test users.
- For Testing purposes only all these 20 user (not the admin) has the same password "password"
- The app will listen on port 3000 on the container. 3000 is exposed as well.
- Visit http://localhost:3000