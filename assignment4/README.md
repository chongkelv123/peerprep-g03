# CS3219-AY22-23-Project-Skeleton


### Running Docker Compose
1. Open Terminal/CMD/PowerShell.
2. Navigate to root folder './peerprep-g03/assignment4'.
3. Run `docker-compose build --no-cache` to start building the Images and Containers in Docker.
4. Run `docker-compose up` after the build process is complete.
5. Note that matching-service-consumer-1 container needs to be started manually from Docker desktop AFTER rabbitmq is started. Although matching-service-consumer service has dependency stated in docker-compose.yml but it will still start before rabbitmq starts.


### Start frontend
1. Navigate to root folder './peerprep-g03'
2. Install npm packages using 'npm i'.
3. Run frontend using 'npm run dev'.
4. Start the frontend by specific 'localhost:3000/' in the web browser.


### Starting backend
1. Navigate to the backend directory
    - In the project root directory, go to the backend folder using `cd app/backend`
2. Set up the .env file
    - Rename `.env.sample` file to `.env`.
3. Install required libraries
    - Install all necessary libaries by executing `pip install -r requirements.txt`
4.  Run the program
    - Start the flask application with `python app.py`
5. Verify successful launch 
    - Upon successful startup, the msg "Running on http://127.0.0.1:5000" should be displayed in your terminal


    ## User Service

### Quick Start
1. Rename `.env.sample` file to `.env`.
2. Create a Cloud DB URL using Mongo Atlas.
3. Enter the DB URL created as `DB_CLOUD_URI` in `.env` file.
4. Install npm packages using `npm i`.
5. Run User Service using `npm run dev`.

### Complete User Service Guide: [User Service Guide](./user-service/README.md)
