import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()


from service_rest.models import AutomobileVO


def get_autos():
    response = requests.get('http://project-beta-inventory-api-1/automobiles')
    content = json.loads(response.content)
    for automobile in content["FILL THIS IN"]:
        AutomobileVO.objects.update_or_create(
            vin=automobile["vin"],
            sold=automobile["sold"]
        )


def poll(repeat=True):
    while True:
        print('Service poller polling for data')
        try:
            get_autos()       
        except Exception as e:
            print(e, file=sys.stderr)
        if (not repeat):
            break
        time.sleep(60)


if __name__ == "__main__":
    poll()
