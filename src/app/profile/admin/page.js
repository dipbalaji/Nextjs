import React from 'react'


async function takeTime(){
    await new Promise((resolve)=>{
        setTimeout(resolve,3000)
    })
}
const page =async () => {

    await takeTime()

  return (
    <div>
        <h1>This is Admin page</h1>
    </div>
  )
}

export default page
