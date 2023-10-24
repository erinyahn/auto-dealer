from django.urls import path
from .views import (
    api_del_technician,
    api_technicians,
    api_appointment,
    api_appointments,
)


urlpatterns = [
    path("technicians", api_technicians, name="api_technicians"),
    path("technicians/<int:pk>/", api_del_technician, name="api_del_technician"),
    path("appointments/", api_appointments, name="api_appointments"),
    path("appointments/<int:pk>", api_appointment, name="api_appointment"),
    path("appointments/<int:pk>/cancel/", api_appointment, name="cancel_appt"),
    path("appointments/<int:pk>/finish/", api_appointment, name="finished_apptmt"),
]
