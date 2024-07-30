function Hello(){

  let lastname = "kumar";
  let messageNO = 1234;

  let fullName = ()=> {
    return 'shubham kumar';
  }

  return <p>
    {messageNO} - My name is  {fullName()} .
  </p>
}

export default Hello;