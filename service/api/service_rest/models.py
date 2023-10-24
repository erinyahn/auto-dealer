from django.db import models


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17)
    sold = models.BooleanField(default=False)

    def __str__(self):
        return f"VIN: {self.vin}"


class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return f"{self.first_name} {self.lastname}"


class Appointment(models.Model):
    STATUS_CHOICES = (
        ("created", "Created"),
        ("canceled", "Canceled"),
        ("finished", "Finished"),
    )
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=200)
    status = models.CharField(max_length=200, choices=STATUS_CHOICES, default="created")
    vin = models.CharField(max_length=17)
    customer = models.CharField(max_length=200)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.date_time

    def get_api_url(self):
        return reverse("api_appointment", kwargs={"pk": self.pk})
