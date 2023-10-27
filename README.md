# CarCar

Team:
* Daniel Glasgow: Sales Microservice
* Erin Ahn: Service Microservices

## Design
BOOTSTRAP

![Alt text](<Screenshot 2023-10-27 at 3.29.46 PM.png>)
## Service microservice


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
