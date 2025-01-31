import {test, expect} from '@playwright/test'

let userID;

test('Get User', async({request})=>{

    const response=await request.get('http://localhost:3000/users')
    // console.log(await response.json())
    console.log(response.status())
    expect(response.status()).toBe(200)
    const body=await response.json()
    console.log(body[0].id)
})

test('create user', async({request})=>{

    const response=await request.post('http://localhost:3000/users',
                    {
                    data:{
                        'FirstName': 'Ravi',
                        'LastName':'Pal',
                        'SubjectID':1
                    },
                    headers:{
                              "Accept":"application/json"
                            }      
                    }
                    )

    expect(response.status()).toBe(201)
    const body=await response.json()
    console.log(body)
    userID=await body.id
    console.log(userID)
})

// test('update user', async({request})=>{

//     const response=await request.put('http://localhost:3000/users/'+userID,
//         {
//             data:{
//                 'FirstName':'Ravi',
//                 'LastName':'Pal',
//                 'SubjectID':5
//             },
//             headers:{
//                 "Accept":"application/json"
//             }
//         }
//     )
    
//     expect(response.status()).toBe(204)
// })


test('delete user', async({request})=>{
    
    const response=await request.delete('http://localhost:3000/users/'+userID)

    expect(response.status()).toBe(200)
})