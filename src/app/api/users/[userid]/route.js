import { NextRequest, NextResponse } from "next/server";

export  function DELETE(request,{params}) {
    // console.log(params)
    // const id = params.userid;
    // console.log(id);
    // destructure
    const {userid}=params;
    console.log(userid)
    return NextResponse.json(
        {
            message:"Testing Delete....."
        }
    )
}