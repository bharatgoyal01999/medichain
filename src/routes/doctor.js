import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import ipfs from '../ipfs' 
import Web3 from 'web3'
import {BigQuery} from '@google-cloud/bigquery'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

var agentPublicKey = "0x4287A36226D3028a63237800815397aFf195f36C";
const web3=  new Web3("http://127.0.0.1:8545");
var contractAddress = '0x9307c5067d45098F07d99c2018f00807b4E07b0F';

var abi =[
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
var contract = new web3.eth.Contract(abi, contractAddress, {
    from: agentPublicKey,
    gas:3000000
  });



 const Doctor=()=>{
const params= useParams();
   
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
                <AccessedPatient />
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

    useEffect(async ()=>{

        var publicKey=params.publicKey;
        contract.methods.get_doctor(publicKey).call().then(res=>{
            setName(res[0]);
            setAge(res[1])
            setRecordHash(res[4])
           
            
        })
    },[])

    return (
        <div className="panel panel-default" style={{marginTop:20, width:"80%", border :"1px solid black"}}>
        <div className="panel-heading" style={{backgroundColor:'#EBF0F1', height:80, justifyContent:'center',alignItems:'center', paddingTop:20, marginBottom:20}}>
            <h3 className="text-center">Personal Information</h3>
        </div>
        <div className="panel-body" style={{ paddingLeft:160}}>
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
                    
                   
                    <pre id="records" style={{marginTop: 20}}>

                    </pre>
                   
                </div>
            </div>
               
        </div>
    </div>
    );

}



const AccessedPatient=()=>{
const params=useParams();
    const [accessedPatientList, setAccessedPatientist] = useState([]);
    const [patientRecords, setPatientRecords] = useState([]);
    const [diagnosis, writeDiganosis] = useState('');

    const updatePermittedList=()=>{

        contract.methods.get_accessed_patientlist_for_doctor(params.publicKey).call({
            from:params.publicKey,
            gas:3000000
        }).then(res=>{
            console.log(res, 'permit patient list')
            var accessedPatient=[];
            Object.keys(res).forEach(index=>{

            var temp_obj={};
            temp_obj['publicKey'] = res[index];

            contract.methods.get_patient(res[index]).call().then(async patient=>{

                temp_obj['name'] = patient[0];
                temp_obj['age'] = patient[1];
				console.log(patient);
                accessedPatient.push(temp_obj);
                
            
            }).catch(err=>{console.log(err)})

            })

            setTimeout(()=>{
               
                setAccessedPatientist(accessedPatient);
               

           },3000)

        }).catch(err=>console.log(err))
    
    }

     useEffect(()=>{

        updatePermittedList();
        


     },[])

     return (
        <div className="panel panel-default" style={{marginTop:20, width:"80%", border :"1px solid black"}}>
        <div className="panel-heading" style={{backgroundColor:'#EBF0F1', height:80, justifyContent:'center',alignItems:'center', paddingTop:20, marginBottom:20}}>
            <h3 className="text-center">Accessible EMRs</h3>
        </div>
        <div className="panel-body" style={{paddingLeft:100}}>
           
            <div className="row">
                <div className="col-sm-offset-1 col-sm-10">
                    <table id="viewPatient" className="table table-hover" cellPadding={20}>
                        <tr>
                            <th>Patient</th>
                            <th className="publicKeyPatient">Public Key</th>
                            <th>Action</th>
                        </tr>
                        {
                            accessedPatientList.map(patient=>{
                                return (<SinglePatient name={patient.name} publicKey={patient.publicKey} />)
                            })
                        }
                    </table>
                </div>
            </div>
        </div>
    </div> 
     );

}

const SinglePatient=(props)=>{
const params = useParams();
 const [btnText,setShowBtnTxt]= useState('Show Records');
 const [isShowRecords, setIsShowRecords]=useState(false);
 const [patientRecords, setPatientRecords] = useState('');
 const [patientRecordDisplay , setPatientRecordDisplay] = useState('none');
 const [docName, setDocName] = useState('');
 const [pw,setPw]=useState("");
 const [recordHash, setRecordHash] = useState('')
 const [patientDignosis, setPatientDignosis]=useState();
 const [detail, setDetails]= useState();

const [recordButtonColor, setRecordButtonColor] = useState("Green");



const saveDignosis=async ()=>{
    var date= new Date();
    
    var publicKey=params.publicKey;
    contract.methods.get_doctor(publicKey).call().then(async res=>{
        setDocName(res[0]);
      
        setRecordHash(res[4])
    
        var newRecords = `Diagnosed Time : ${date.toUTCString()}
    Diagnosed By : ${res[0]}
    Doctor's Public Key : ${params.publicKey}
    Diagnosis : ${patientDignosis}
    Comments : ${detail}
                
    `
    
        var updatedRecord = patientRecords + newRecords; 
        var buffer= Buffer(updatedRecord);
        const file = await ipfs.add(buffer);
        console.log(file.path)
    
        contract.methods.set_hash(props.publicKey,file.path).send().then(res=>{
            setPatientRecords(updatedRecord)
			alert("Records are saved sucessfully")
        }).catch(err=>{console.log(err)})
    
    })

	const bigqueryClient = new BigQuery();

	var datasetId= 'buoyant-embassy-312110:Major2021';
	var tableId = "final";

	contract.methods.get_patient_details(props.publicKey).call().then(async res=>{
		var rows_to_insert = [
		{ "consult_day": date.toUTCString(),  "patientweight": pw, "diagnosis": patientDignosis , 'gender':res[0], 'city':res[1], 'country':res[2], 'ethnicity':res[3], 'insaurance':res[4]}
		
	]
	await bigqueryClient
    .dataset(datasetId)
    .table(tableId)
    .insert(rows_to_insert);
  	console.log(`Inserted ${rows_to_insert.length} rows`);
	}).catch(err=>{console.log(err)})

	


    

}

    return (
        <>
                    <tr style={{marginTop:20}}>
                    <td>{props.name}
                    </td>
                            <td className="publicKeyPatient">{props.publicKey}</td>
                            <td><span className='btn btn-success dangerButton' style={{color :'white', backgroundColor:recordButtonColor}} 
                            onClick={async()=>{
                        if(isShowRecords==false){

                            var patientRecord= ''; 

                            contract.methods.get_hash(props.publicKey).call().then(async res=>{
                                console.log(res)
                                var url= 'https://ipfs.infura.io/ipfs/'+res;
                                console.log(url);
                            fetch(url).then(rec=>rec.text()).then(record=>{
                                var temp={};

                              
                               setPatientRecords(record.slice(0,record.indexOf('Public Key'))+"\n"+ record.slice(record.indexOf('Public Key'),record.length)+'\n')
                               console.log(record.slice(0,record.indexOf('Public Key'))+"\n"+ record.slice(record.indexOf('Public Key'),record.length)+'\n')
                            })
                             
                                
                            })
                   
                        setShowBtnTxt('Hide Records');
                        setRecordButtonColor('#DA2F1B')
                        setPatientRecordDisplay('flex');
                        setIsShowRecords(!isShowRecords);

                       }
                        else{
                            setShowBtnTxt('Show Records');
                            setRecordButtonColor('green');
                            setPatientRecordDisplay('none')
                            setIsShowRecords(!isShowRecords);
                        }
}}>{btnText}</span></td>

                        </tr>
                        <tr border={0}>
                            <td colSpan={3}>
                            <div className="tab-content" style={{display:patientRecordDisplay,width:'100%', flexDirection:'column'}}>
                            <div style={{width:'100%', backgroundColor:'#EBF0F1'}}>
                            <pre style={{margin:20}} id="records${patientAddress}">{patientRecords}</pre>         
                            </div>
                            <div>
                            <div className="form-group col-sm-10">
                                                <div className="row" style={{marginTop:30}}>
                                                    <div className="col-sm-2"><label for="ailmentsList" className="control-label">Diagnosis:</label></div>
                                                    <div className="col-sm-10">
                                                        <select className="form-control"
                                                         id="ailmentsList${patientAddress}"
                                                          style={{width:'100%'}} required
                                                          onChange={(e)=>{
                                                              setPatientDignosis(e.target.value)
                                                          }}
                                                          >
                                                            <option selected disabled>-- Please Select --</option>
                                                            <option value = "Cancer">Cancer</option>
                                                            <option value = "Heart Attack">Heart Attack</option>
                                                            <option value = "Brain Tumour">Brain Tumour</option>
                                                            <option value = "Anaemia">Anaemia</option>
                                                            <option value = "Alzeimer's">Alzheimer's</option>
                                                            <option value = "Gastroenteritis">Gastroenteritis</option>
                                                            <option value = "Tuberculosis">Tuberculosis</option>
                                                            <option value = "Spondylolisthesis">Spondylolisthesis</option>
                                                            <option value = "Covid-19">Covid-19</option>
                                                            <option value = "Viral Fever">Viral Fever</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row" style={{marginTop:10}}>
                                            <div className="form-group col-sm-10">
											<div className="row" style={{marginTop:10, marginBottom:10 }}>
                                                    <div className="col-sm-2">
                                                        <label className="control-label" for="details">Patient Weight:</label>
                                                    </div>
                                                    <div className="col-sm-10">
                                                        <input className="form-control" rows="5" id="details" type='text' placeholder="Enter Patient Weght" name = "Details" style={{width:'100%'}} required autofocus
														
														onChange={(e)=>{setPw(e.target.value)}}
                                                />
                                                      
                                                    </div>
                                                </div> 
                                                <div className="row">
                                                    <div className="col-sm-2">
                                                        <label className="control-label" for="details">Details:</label>
                                                    </div>
                                                    <div className="col-sm-10">
                                                        <textarea className="form-control" rows="5" id="details" placeholder="Enter details to be added" name = "Details" style={{width:'100%'}} required autofocus 
                                                        
                                                        onChange={(e)=>{
                                                            setDetails(e.target.value)
                                                        }}
                                                        ></textarea>
                                                      
                                                    </div>
                                                </div>  
												   
                                            </div>
                                            <div className="form-group col-sm-2">
                                                <button className="btn btn-primary" onClick={saveDignosis}>Submit</button>
                                            </div></div>

                            </div></div>
                            </td>
                        </tr>
                        
                        </>
                        
    );
}

export default Doctor;