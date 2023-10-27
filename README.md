# CarCar

Team:
* Daniel Glasgow: Sales Microservice
* Erin Ahn: Service Microservices

## Design
Bootstrap was used for CSS.
Comprehensive view of the project can be seen in this diagram below:
 ![Alt text](<Screenshot 2023-10-27 at 4.01.04 PM.png>)

## Service microservice
![Alt text](<Screenshot 2023-10-27 at 3.38.54 PM.png>)

The table above shows all the available methods for the service microservice. In the service microservice, there are three models (Technician, Appointment, and AutomobileVO). The properties of the Technician Model is first name of the technician, last name of the technician, and the employee ID (which is a unique property, meaning there cannot be duplicates). In the Appointment Model, the properties are as follows: date time, reason, status (which is limited to 3 choices - created, canceled, and finished), VIN, customer, and technician (foreign key from Technician model with one technician to many appointments). The Automobile VO Model uses the Service Poller to obtain the vin property from the Automobile Model from the Inventory Microservice. 


## Sales microservice

We created multiple models for the sales microservice. We have the Salesperson microservice which takes three Charfields fields, a first name, a last name and an employee ID.
The employee ID has unique=True passed in so that each employee will have their own ID that is unique to their person. Customer takes in 4 Charfields so that data can be inputed
and used for each customer. We have an AutomobileVO model that is used to capture the vin and sold status of autos from the Inventory microservice. We use a poller called
"get_automobile" which tells it to take data from the automobiles list so that it can be used in the sales microservice. In this case we are using the poller to look into the
automobiles and pull out the vin for each automobile. Sales take in the "price" variable that uses a CharField for a price to be input. Then it uses three seperate Foreign Keys to take
data from the other models we built so that they can be used within our Sale model. The automobile will look at all the data in AutomobileVO, salesperson will look into all the data
from the Salesperson model and Customer will look into all the data from the Customer model so it's readily available for access within our Sale model. They are requirments to have a
Sale be created alongside the pice variable. This means that if we didn't have a poller polling the data we couldn't access what is in our inventory to mark it as sold or use it to
create a sale. The "get_api_url" function is looking telling it to look at the api_vehicle_model url that is in the inventory microservice so that it can make the data from there
available for the Sale model as well. The kwargs part is how it gets the individual automobile from the VO by looking at the "pk" and matching it with the "id" that it is looking in.
