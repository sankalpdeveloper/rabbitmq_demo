# I Learn how How Rabbit MQ Work 

If you want play around with that


To get CONN_URL  Create Your Account on [cloudamqp](https://www.cloudamqp.com)



First Install Dependency

then run 
``` 
nodemon
```

and also run to sent watch messgage
```
nodemon worker.js
```

then hit 

127.0.0.1:6000/add_message

with following body

```javascript
{
    "data": {
        "event": "user_feedback",
        "feebback_type": "bottom_ok_123",
        "feebback_data": {
            "star": 5,
            "is_sattisfied": true
        }
    }
}
```
