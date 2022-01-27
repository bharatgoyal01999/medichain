import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Web3 from 'web3'
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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

 const Patient=()=>{
    
    
    return (
        <div
        style={{display:'block', flexDirection:"column"}}
        >
            <div style={{display:'flex',
                        flex:0.2,
                         flexDirection:'row',
                         justifyContent:'space-between', 
                         alignItems:'center',
                          backgroundColor:'black',
                          opacity:0.8,
                            padding:7 }}
                          >
            <span style={{color:'white', opacity:0.7, fontSize:20}}>Medi-Chain</span>



              <Link to='/' style={{textDecoration:'none'}}>  <span 
              style={{fontSize:20}}
                className='button'
                >
                         Logout
                </span></Link>
                
          
            
            </div>

<div style={{display:'flex', flexDirection:'column', flex:0.8, alignItems:'center'}}>
    <PersonalInformation />
</div>

<div  style={{display:'flex', flexDirection:'column', flex:0.8, alignItems:'center'}}>
            <AllDoctorList />
</div>
          


        </div>
    
    );
}



const PersonalInformation=()=>{

    const params=useParams()
    const [name,setName] = useState('');
    const [age, setAge] = useState('');

 

    const [recordHash,  setRecordHash] = useState('');
    const [viewRecordsText, setViewRecordsText] = useState('View Medical Records')
    const [btnClr,setBtnClr]= useState('green');
    const [recordDisplay ,setRecordDisplay] = useState('none');
    const [showMedicalRecords, setShowMedicalRecords] = useState(false)
    const [patientRecord, setPatientRecords]= useState('')
    
    const getPatientRecords=()=>{
        console.log("Button clicked")
        if(!showMedicalRecords){
            setViewRecordsText("Hide Medical Records");
            setRecordDisplay("flex");
            setShowMedicalRecords(!showMedicalRecords);
            setBtnClr('#DA2F1Bed');
        }
        else{
            setViewRecordsText("View Medical Records");
            setRecordDisplay('none')
            setShowMedicalRecords(!showMedicalRecords);
            setBtnClr('green');
        }

        contract.methods.get_hash(params.publicKey).call().then(async res=>{
            var url= 'https://ipfs.infura.io/ipfs/'+res;
            fetch(url).then(rec=>rec.text()).then(record=>{
                var temp={};
                setPatientRecords(record.slice(0,record.indexOf('Public Key'))+"\n"+ record.slice(record.indexOf('Public Key'),record.length)+'\n')
               console.log(record.slice(0,record.indexOf('Public Key'))+"\n"+ record.slice(record.indexOf('Public Key'),record.length)+'\n')
            })
        })
           
    }

    useEffect(async ()=>{

        var publicKey=params.publicKey;
        contract.methods.get_patient(publicKey).call().then(res=>{
            setName(res[0]);
            setAge(res[1])
            setRecordHash(res[4])
           
            
        })

        // Getting Doctor List from contract







    },[])





   

    return (
        <div className="panel panel-default" style={{marginTop:20, width:"80%", border :"1px solid black"}}>
                <div className="panel-heading" style={{backgroundColor:'#EBF0F1', height:80, justifyContent:'center',alignItems:'center', paddingTop:20, marginBottom:20}}>
                    <h3 className="text-center">Personal Information</h3>
                </div>
  
                <div className="panel-body" style={{paddingLeft:160}}>
                    <div className="row">
                        <div className="col-sm-offset-1 col-sm-10">
                            <table className="table" cellPadding='3'>
                                <tr>
                                    <th>Name:</th>
                                    <td id="name" style={{fontWeight:600}}>{name} </td>
                                </tr>
                                <tr>
                                    <th>Age:</th>
                                    <td id="age" style={{fontWeight:600}}>{age}</td>
                                </tr>
                            </table>
                            
                            <div className="text-center">
                            <div style={{width:'100%', backgroundColor:'#EBF0F1',display:recordDisplay}}>
                                                    <pre style={{margin:20}}>  {patientRecord}</pre>
                            </div>
                                   {!showMedicalRecords && <h8>{"Your records are stored here: https://ipfs.infura.io/ipfs/"+recordHash}<span id="recordsHash">
                                        </span></h8>}
                                <button type="submit" className="btn btn-info btn-lg" onClick={getPatientRecords} style={{backgroundColor:btnClr, marginTop:20}}>{viewRecordsText}</button>
                                
                            </div>
                            <pre id="records" style={{marginTop: 20}}>

                            </pre>
                           
                        </div>
                    </div>
                       
                </div>
            </div>
    );
}




const AllDoctorList=()=>{

    const params=useParams()
    const [allDoctorList, setAllDoctorList]= useState([]);
    const [permitDoctorList,setPermittedDoctorList]=useState([]);
    const [newPermittedDoctor , setNewPermittedDoctor] = useState();


    const updatePermittedList=()=>{

       
        contract.methods.get_accessed_doctorlist_for_patient(params.publicKey).call({
            from:params.publicKey,
            gas:3000000
        }).then(res=>{
            console.log(res, 'permit doctor list')
            var permitDoc=[];
            Object.keys(res).forEach(index=>{

            var temp_obj={};
            temp_obj['publicKey'] = res[index];

            contract.methods.get_doctor(res[index]).call().then(async doctor=>{

                temp_obj['name'] = doctor[0];
                temp_obj['age'] = doctor[1];
                permitDoc.push(temp_obj);
                
            
            }).catch(err=>{console.log(err)})

            })

            setTimeout(()=>{
               
                setPermittedDoctorList(permitDoc);
               

           },3000)

        }).catch(err=>console.log(err))
    }

useEffect(()=>{


    contract.methods.get_doctor_list().call().then( async res=>{
       
        
     
     
       var doctorsName=[]

        Object.keys(res).forEach(index=>{

           var temp_obj={};
            temp_obj['publicKey'] = res[index];
            contract.methods.get_doctor(res[index]).call().then(async doctor=>{

                temp_obj['name'] = doctor[0];
                temp_obj['age'] = doctor[1];
                doctorsName.push(temp_obj);
                
            
            }).catch(err=>{console.log(err)})
        })

 

           setTimeout(()=>{
                console.log(doctorsName)
                setAllDoctorList(doctorsName);
               

           },3000)

       

    }).catch(err=>console.log(err))


    updatePermittedList();

},[])


const giveAccess=()=>{
	var flag=0;
	contract.methods.get_accessed_doctorlist_for_patient(params.publicKey).call({
		from:params.publicKey,
		gas:3000000
	}).then(res=>{
		console.log(res, 'permit doctor list')
		var permitDoc=[];
		Object.keys(res).forEach(index=>{
			
			if(res[index]==newPermittedDoctor){
				flag=1;
			}

		})}).catch(err=>console.log(err))

		setTimeout(()=>{

			if(flag==1){
				alert("Already gave permission to this doctor")
			}
			else{
				contract.methods.permit_access(newPermittedDoctor).send({
					from : params.publicKey,
					value:web3.utils.toWei('2'),
					gas:3000000
				}).then(res=>{updatePermittedList()}).catch(err=>{console.log(err)})
			}

		},1500)
	

    
    

}

    return (<>
        <div className="panel panel-default" style={{marginTop:20, width:"80%", border :"1px solid black"}}>
            <div className="panel-heading" style={{backgroundColor:'#EBF0F1', height:80, justifyContent:'center',alignItems:'center', paddingTop:20, marginBottom:20}}>
                    <h3 className="text-center">Share Your Medical Records</h3>
                </div>
                <div className="panel-body" style={{padding:20}}>
                <div className="form-group" style={{display:'flex', flexDirection:'row'}}> 
                            <label for="permitDoctorList" className="control-label col-sm-2">Doctor:</label>
                            <div className="col-sm-8">
                                <input list='doctor' className="form-control" id="permitDoctorList" onChange={(e)=>{setNewPermittedDoctor(e.target.value)}} />
									<datalist id='doctor'>
                                    
                                    {
                                        allDoctorList.map((doctorObj)=>{
                                           return  (<option key={doctorObj.publicKey} value={doctorObj.publicKey} >
                                               {doctorObj.name}
                                           </option>)
                                        })
                                    }</datalist>
                                
                            </div>


                        </div>
                        <div className="text-center" style={{marginTop:40}}>
                        <button onClick={giveAccess} className="btn btn-primary btn-lg">Submit</button>
                    </div>
                </div>
            

        </div>
        <div className="panel panel-default"  style={{marginTop:20, width:"80%", border :"1px solid black"}}>
                <div className="panel-heading" style={{backgroundColor:'#EBF0F1', height:80, justifyContent:'center',alignItems:'center', paddingTop:20, marginBottom:20}}>
                    <h3 className="text-center">Current EMR access holders</h3>
                </div>
                <div className="panel-body" style={{padding:20}}>
                    
                    <div className="row">
                        <div className="col-sm-offset-1 col-sm-10">
                            <table id="accessDoc" className="table table-hover" cellPadding = {10} >
                                <tr>
                                    <th>Doctor</th>
                                    <th className="publicKeyDoctor">Public Key</th>
                                    <th>Revoke access</th>
                                </tr>
                             {permitDoctorList.map(doctor=>{
                               
                                   return <PermitDoctorCell name={doctor.name} publicKey={doctor.publicKey} key={doctor.publicKey} updatePermittedList={updatePermittedList} />
                             })}
                            </table>
                        </div>
                    </div>

                </div>
            </div> 
        </>

    );
}



const PermitDoctorCell=(props)=>{

const params= useParams();

    const revokeAccess=()=>{
console.log('patient Key', params.publicKey)
console.log("doctor key", props.publicKey )
       var contract = new web3.eth.Contract(abi, contractAddress, {
    from: params.publicKey,
    gas:3000000
  });


          contract.methods.revoke_access(props.publicKey).send().then(res=>{props.updatePermittedList()}).catch(err=>console.log(err))
    }
    return (
       
        <tr>
        <td>{props.name}</td>
        <td>{props.publicKey}</td>
        <td>
        <span  style={{color:'white' , backgroundColor:'#DA2F1B', fontSize:15, fontWeight:'bold', borderRadius:5}} className='dangerButton'
        onClick={revokeAccess}
        >Revoke access</span>
        </td>
    </tr> 
    );
}
export default Patient;