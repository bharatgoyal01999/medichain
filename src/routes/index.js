import React, {useState, useEffect} from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ipfs from '../ipfs'
import {useNavigate} from 'react-router-dom';
import Web3 from 'web3';

import {Link} from 'react-router-dom'


var abi= [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_age",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_designation",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_gender",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_city",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_country",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_ethnicity",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_insurance",
				"type": "string"
			}
		],
		"name": "add_agent",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "doctorList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "get_accessed_doctorlist_for_patient",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "get_accessed_patientlist_for_doctor",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "get_doctor",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get_doctor_list",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "paddr",
				"type": "address"
			}
		],
		"name": "get_hash",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "get_patient",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "get_patient_details",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "paddr",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "daddr",
				"type": "address"
			}
		],
		"name": "get_patient_doctor_name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get_patient_list",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "patientList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "permit_access",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "paddr",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "daddr",
				"type": "address"
			}
		],
		"name": "remove_patient",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "daddr",
				"type": "address"
			}
		],
		"name": "revoke_access",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "paddr",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			}
		],
		"name": "set_hash",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

var agentPublicKey = "0x4287A36226D3028a63237800815397aFf195f36C";
const web3=  new Web3("http://127.0.0.1:8545");
var contractAddress = '0x9307c5067d45098F07d99c2018f00807b4E07b0F';


var contract = new web3.eth.Contract(abi, contractAddress, {
    from: agentPublicKey,
    gas:3000000
  });

const Home=()=>{
    var [loginDisplay , setLoginDisplay] = useState('flex');
    var [registerDisplay , setRegisterDisplay] = useState('none');

   

    return (
        <div
        style={{display:'flex', flexDirection:"column", flex:1}}
        >
            <div style={{display:'flex',
                        flex:0.2,
                         flexDirection:'row',
                         justifyContent:'space-between', 
                         alignItems:'center',
                          backgroundColor:'black',
                          opacity:0.8,
                            padding:10 }}
                          >
            <span style={{color:'white', opacity:0.7, fontSize:20}}>Medi-Chain</span>


            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', flex:0.1}}>
                <span 
                className='button'
                 onClick={()=>{
                     setLoginDisplay('flex');
                     setRegisterDisplay('none'); }}>
                         Login
                </span>
                <span 
                  onClick={()=>{
                    setLoginDisplay('none');
                    setRegisterDisplay('flex');
               }}
                className='button'>Register</span>
            </div>
            
            </div>


            {/* Login Division */}
            <div style={{display:loginDisplay, flex:0.8, justifyContent:'center', alignItems:'center'}}>
               <Login />
            </div>

            {/* Register Division */}
            <div  style={{display:registerDisplay, flex:0.8, justifyContent:'center', alignItems:'center', height:'100%'}}>
            <Register />
            </div>


        </div>
    );
}


const Login=()=>{
    const navigate=useNavigate();
    const [publicKey ,setPublicKey] = useState('');
	
   

    const login=()=>{
        console.log("Inside Login", publicKey)

            contract.methods.get_patient_list().call().then(res=>{
                console.log(res,'response')
                var PatientList = res;
                for(var i = 0; i < PatientList.length; i++) {
                    if (parseInt(publicKey.toLowerCase()) == PatientList[i]) {
                        console.log('yes')
                        navigate('/patient/'+publicKey)
                    }
                }

            }).catch(err=>{
                console.log(err)
            })
            contract.methods.get_doctor_list().call().then(res=>{

                var DoctorList = res;
                for(var i = 0; i < DoctorList.length; i++) {
                    if (parseInt(publicKey.toLowerCase()) == DoctorList[i]) {
                        navigate('/doctor/'+publicKey)
                    }
                }

            }).catch(err=>{
                console.log(err)
            })
    }

    return (
        <div className="container" style={{alignSelf:'center', justifySelf:'center', marginTop:'5%'}}>
        <div className="panel panel-default" >
            <div style={{backgroundColor:'#EBF0F1', height:80, justifyContent:'center',alignItems:'center', paddingLeft:300, paddingTop:20, marginBottom:20}}>
                    <h3  style={{color:'black'}}>Please enter your public key to continue.</h3>
            </div>
    
            <div style={{justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column',width:'100%'}}>
              
                
                
                    <div  style={{marginTop:5, width:'70%', display:'flex',justifyContent:'space-around' }}>
                        <label className="control-label col-sm-2" for="name" style={{fontWeight:'bold'}}>Public Key:</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="name" placeholder="Enter Public Key" name = "Name" required autofocus 
                            onChange={(e)=>{setPublicKey(e.target.value)}}
                            />
                        </div>
                    </div>
                   
                   
                  
    
                
                <div className="text-center" style={{marginTop:30}}>
                    <button className="btn btn-primary btn-lg" onClick={login}>Login</button>
                </div>
            </div>
        </div>
        
        <hr></hr>
            
    </div>
);

}



const Register=()=>{

    const navigate= useNavigate();
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [degignation,setDegignation]= useState('');
    const [publicKey, setPublicKey] =useState('');
	const [dob, setDob]=useState('');
	const [gender, setGender]=useState('');
	const [city, setCity]=useState('');
	const [country, setCountry] = useState('');
	const [ethenicity, setEthenicity] = useState('');
	const [insaurance , setInsaurance] = useState('');


    const [validAgent, setValidAgent] = useState(true)

const addAgent=async ()=>{
  

      contract.methods.get_patient_list().call().then(res=>{console.log(res)}).catch(err=>console.log(err))

    var Degi = parseInt(degignation);
    var pKey = publicKey.toLowerCase();
    
    var PatientList;
    var DoctorList;

    contract.methods.get_patient_list().call().then(res=>{PatientList=res}).catch(err=>console.log(err));

    contract.methods.get_doctor_list().call().then(res=>{DoctorList=res}).catch(err=>console.log(err));
      setTimeout(()=>{
        for(var j = 0; j < PatientList.length; j++) {
            if (publicKey == PatientList[j] ){
                setValidAgent(false);
           }
       }
       for(var j = 0; j < DoctorList.length; j++) {
            if (publicKey == DoctorList[j] ){
                setValidAgent(false);
           }
       }
      },1000)
   

   var ipfsHash='';
   if(Degi== "0"){
        var reportTitle = 
        `Name: ${name}
        Public Key: ${publicKey}
                                    
        `;
        var buffer = Buffer(reportTitle);


 const file = await ipfs.add(buffer);
 console.log(file)

  var Contract = new web3.eth.Contract(abi, contractAddress, {
    from: pKey,
    gas:3000000
  });

 Contract.methods.add_agent(name,age,Degi,file.path,gender, city, country,ethenicity, insaurance ).send().then(res=>{
     console.log(res)
     navigate('/patient/'+pKey)
    
 }).catch(err=>console.log(err))

   }
   else{
    var reportTitle = `Name : ${name} 
    Public Key: ${pKey}`;
    var buffer = Buffer(reportTitle);


const file = await ipfs.add(buffer);
console.log(file)

var Contract = new web3.eth.Contract(abi, contractAddress, {
from: pKey,
gas:3000000
});

Contract.methods.add_agent(name,age,Degi,file.path,gender, city, country,ethenicity, insaurance ).send().then(res=>{
 console.log(res)
 navigate('/doctor/'+pKey)

}).catch(err=>console.log(err))

}
    
   




}

return (
    <div className="container" style={{alignSelf:'center', justifySelf:'center', marginTop:'5%'}}>
    <div className="panel panel-default" >
        <div style={{backgroundColor:'#EBF0F1', height:80, justifyContent:'center',alignItems:'center', paddingLeft:300, paddingTop:20, marginBottom:20}}>
                <h3  style={{color:'black'}}>Please enter your details to register.</h3>
        </div>

        <div style={{justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column',width:'100%'}}>
           
            
            
                <div  style={{marginTop:5, width:'70%', display:'flex',justifyContent:'space-around' }}>
                    <label className="control-label col-sm-2" for="name" style={{fontWeight:'bold'}}>Name:</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="name" placeholder="Enter name" name = "Name" required autofocus onChange={(e)=>{
                            setName(e.target.value)
                        }} />
                    </div>
                </div>
                <div  style={{marginTop:10, width:'70%', display:'flex',justifyContent:'space-around' }}>
                    <label className="control-label col-sm-2" for="age"  style={{fontWeight:'bold'}}>Age:</label>
                    <div className="col-sm-8">
                        <input type="age" className="form-control" id="age" placeholder="Enter age" name = "Age" required
                        onChange={(e)=>{
                            setAge(e.target.value)
                        }}
                        /></div>
                    </div>
					<div  style={{marginTop:5, width:'70%', display:'flex',justifyContent:'space-around' }}>
                    <label className="control-label col-sm-2" for="DOB" style={{fontWeight:'bold'}} 
					 
					>DOB:</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="name" placeholder="yyyy-mm-dd" name = "DOB" required autofocus 
						onChange={(e)=>{
							setDob(e.target.value)
						}}
						/>
                    </div>
                </div>
				<div  style={{marginTop:5, width:'70%', display:'flex',justifyContent:'space-around' }}>
                    <label className="control-label col-sm-2" for="gender" style={{fontWeight:'bold'}}>Gender:</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="name" placeholder="M/F" name = "gender" required autofocus  onChange={(e)=>{
						setGender(e.target.value)
					}} />
                    </div>
                </div>
				<div  style={{marginTop:5, width:'70%', display:'flex',justifyContent:'space-around' }}>
                    <label className="control-label col-sm-2" for="city" style={{fontWeight:'bold'}}>City:</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="name" placeholder="city" name = "city" required autofocus 
						onChange={(e)=>{
							setCity(e.target.value)
						}}
						/>
                    </div>
                </div>
				<div  style={{marginTop:5, width:'70%', display:'flex',justifyContent:'space-around' }}>
                    <label className="control-label col-sm-2" for="country" style={{fontWeight:'bold'}}>Country:</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="country" placeholder="country" name = "country" required autofocus onChange={(e)=>{setCountry(e.target.value)}}  />
                    </div>
                </div>
				<div style={{marginTop:10, width:'70%', display:'flex',justifyContent:'space-around' }}> 
                    <label for="Ethnicity"  style={{fontWeight:'bold'}} className="control-label col-sm-2">Ethnicity</label>
                    <div className="col-sm-8">
                        <select className="form-control" id="designation"  required onChange={(e)=>{
						setEthenicity(e.target.value)
					}}  >
                            <option selected disabled>-- Please Select --</option>
                            <option value="WHITE">WHITE</option>
                            <option value="HISPANIC/LATINO - PUERTO RICAN">HISPANIC/LATINO - PUERTO RICAN</option>
							<option value="BLACK/AFRICAN AMERICAN">BLACK/AFRICAN AMERICAN</option>
							<option value="INDIAN">INDIAN</option>
							<option value="ASIAN">ASIAN</option>
							<option value="UNKNOWN/NOT SPECIFIED">UNKNOWN/NOT SPECIFIED</option>
                        </select>
                    </div>
                </div>
				<div style={{marginTop:10, width:'70%', display:'flex',justifyContent:'space-around' }}> 
                    <label for="INSAURANCE"  style={{fontWeight:'bold'}} className="control-label col-sm-2">Insaurance</label>
                    <div className="col-sm-8">
                        <select className="form-control" id="designation"  required 
						onChange={(e)=>{
							setInsaurance(e.target.value)
						}}
						>
                            <option selected disabled>-- Please Select --</option>
                            <option value="Private">Private</option>
                            <option value="Medicare">Medicare</option>
							<option value="Government">Government</option>
							
                        </select>
                    </div>
                </div>
                
                <div style={{marginTop:10, width:'70%', display:'flex',justifyContent:'space-around' }}>
                    <label className="control-label col-sm-2" for="publicKey"  style={{fontWeight:'bold'}} >Public Key:</label>
                    <div className="col-sm-8"> 
                        <input type="text" className="form-control" id="publicKey" placeholder="Enter public key" name = "key" required 
                        
                        onChange={(e)=>{
                            setPublicKey(e.target.value)
                        }}
                        />
                    </div>
                </div>
                <div style={{marginTop:10, width:'70%', display:'flex',justifyContent:'space-around' }}> 
                    <label for="designation"  style={{fontWeight:'bold'}} className="control-label col-sm-2">Registering as</label>
                    <div className="col-sm-8">
                        <select className="form-control" id="designation"  required  onChange={(e)=>{setDegignation(e.target.value)}}>
                            <option selected disabled>-- Please Select --</option>
                            <option value="0">Patient</option>
                            <option value="1">Doctor</option>
                          
                        </select>
                    </div>
                </div>

            
            <div className="text-center" style={{marginTop:30}}>
                <button className="btn btn-primary btn-lg" onClick={addAgent}>Register</button>
            </div>
        </div>
    </div>
    
    <hr></hr>
        
</div>
);
}



export default Home;