export async function get(params:any, request:any) {
    console.log(request)

    var myBlob = new ArrayBuffer(0);
    var init = { "status" : 200 , "statusText" : "SuperSmashingGreat!" };
    return new Response(myBlob,init);
    
  }