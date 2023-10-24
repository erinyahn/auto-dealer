from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment
import json


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
    ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
        "technician",
    ]
    encoders = {
        "vin": AutomobileVOEncoder(),
        "technician": TechnicianEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        content = json.loads(request.body)
        technician = JsonResponse.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )


@require_http_methods(["DEL"])
def api_del_technician(request, pk):
    if request.method == "DEL":
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
        )
    elif request.method == "POST":
        content = json.loads(request.body)
        appointment = JsonResponse.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )


@require_http_methods(["PUT", "DELETE"])
def api_appointment(request, pk):
    if request.method == "PUT":
        content = json.loads(request.body)
        if "status" in content:
            status = content["status"]
            if status in dict(Appointment.STATUS_CHOICES):
                appointment = Appointment.objects.get(id=pk)
                appointment.status = status
                appointment.save()
                return JsonResponse({"message": "Appointment updated"})
            else:
                return JsonResponse(
                    {"error": "Invalid status value. Choose from following: created, canceled, finished."},
                    status=400
                )
    elif request.method == "DELETE":
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    