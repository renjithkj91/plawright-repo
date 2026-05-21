import{test, expect} from '@playwright/test'
import { request } from 'node:http'
test('API testing - GET request', async({request})=>{ //'request' fixture is used to api testing
    const response = await request.get('https://jsonplaceholder.typicode.com/users') // send a GET api request
    expect(response.ok()).toBeTruthy() //response.ok returns true or false. toBeTruthy to compare the response
    const body = await response.json() //this method converts the api response to the json format
    console.log(body)
    expect (body.length).toBeGreaterThan(0) //verifying the response is not empty
})

test('API testing - POST request', async({request})=>{ 
    const response2 = await request.post('https://jsonplaceholder.typicode.com/users',{
        data:{
            name:'Renjith',
            email: 'test@yopmail.com'
        }
    })
    expect(response2.status()).toBe(201)
    const responseBody = await response2.json()
    console.log(responseBody)
    expect(responseBody.name).toBe('Renjith')
})

test('API testing - PATCH request', async({request})=>{
    const response3 = await request.patch('https://jsonplaceholder.typicode.com/users/11', {
        data:{
            name: 'Renjith K'
        }
    })
    expect(response3.status()).toBe(200)
    const responseBody = await response3.json()
    console.log(responseBody)
})

test('API testing - PUT request', async({request})=>{
    const response4 = await request.put('https://jsonplaceholder.typicode.com/users/10',{
        data:{
            "id": 10,
  "name": "Clementina DuBuque new",
  "username": "Moriah.Stanton new",
  "email": "Rey.Padbergnew@karina.biz",
  "address": {
    "street": "Kattie Turnpike new",
    "suite": "Suite 198 new",
    "city": "Lebsackbury new",
    "zipcode": "31428-2261 new",
    "geo": {
      "lat": "-38.23860",
      "lng": "57.22320"
    }
  },
  "phone": "024-648-38040",
  "website": "ambrose.netnew",
  "company": {
    "name": "Hoeger LLC new",
    "catchPhrase": "Centralized empowering task-force new",
    "bs": "target end-to-end models new"
  }
        }
    })
    expect(response4.status()).toBe(200)
    const responseBody = await response4.json()
    console.log(responseBody)
})

test.only('API testing - DELETE request', async({request})=>{
    const response5 = await request.delete('https://jsonplaceholder.typicode.com/users/10', {

    })
    expect(response5.status()).toBe(200)
})