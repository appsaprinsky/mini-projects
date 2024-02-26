import json
import requests


if __name__ == '__main__':


####Register

    # URL = "http://localhost:4000/createUser"
    # params = {
    #     "name": "username2",    
    #     "password": "password1",

    # }
    
    
    # resp = requests.post(URL, json=params)
    # print(resp.text)



####Create New Data

    # URL = "https://eu-central-1.aws.data.mongodb-api.com/app/studentsapp-fwbli/endpoint/students"
    # params = {
    #     "regNo": 0,    
    #     "studentName": "Niki1",
    #     "grade":"4",
    #     "section": "3"

    # }
    
    # resp = requests.post(URL, json=params)
    # print(resp.text)

### Get All Data

    URL = "https://eu-central-1.aws.data.mongodb-api.com/app/studentsapp-fwbli/endpoint/students"
    resp = requests.get(URL)
    print(resp.text)


    ### Delete Data

    # URL = "https://eu-central-1.aws.data.mongodb-api.com/app/studentsapp-fwbli/endpoint/students?id=622d7d7835c3095d33a8b72e"
    # resp = requests.delete(URL)
    # print(resp.text)











