import EmbarkJS from '../embarkjs';

const IndexStorageConfig = {"abiDefinition":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"getLenIndexes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"indexList","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"address","name":"addr","type":"address"}],"internalType":"struct iIndexStorage.IndexName[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"name":"indexes","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"setFactory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_index","type":"address"}],"name":"setIndex","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"}],"deployedAddress":"0xF8300a3FC0931328B04304963A28241439358038","className":"IndexStorage","args":[],"gas":"auto","silent":false,"track":true,"deploy":true,"realRuntimeBytecode":"608060405234801561001057600080fd5b50600436106100625760003560e01c806313af40351461006757806326be2e211461007c5780635bb478081461008f578063a47d7a31146100a2578063c05d6c1d146100c0578063c5d6bd8f146100e0575b600080fd5b61007a610075366004610624565b6100f5565b005b61007a61008a3660046106af565b61014a565b61007a61009d366004610624565b6102da565b6100aa610326565b6040516100b791906107ab565b60405180910390f35b6100d36100ce366004610646565b6104cd565b6040516100b79190610797565b6100e8610522565b6040516100b791906108a9565b6000546001600160a01b031633146101285760405162461bcd60e51b815260040161011f90610842565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031633146101745760405162461bcd60e51b815260040161011f90610872565b8060026000878787876040516020016101909493929190610779565b60405160208183030381529060405280519060200120815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055506003604051806060016040528087878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250604080516020601f88018190048102820181019092528681529181019190879087908190840183828082843760009201829052509385525050506001600160a01b0385166020928301528354600181018555938152819020825180519394600302909101926102909284920190610528565b5060208281015180516102a99260018501920190610528565b5060409190910151600290910180546001600160a01b0319166001600160a01b039092169190911790555050505050565b6000546001600160a01b031633146103045760405162461bcd60e51b815260040161011f90610842565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b60606003805480602002602001604051908101604052809291908181526020016000905b828210156104c35760008481526020908190206040805160038602909201805460026001821615610100026000190190911604601f81018590049094028301608090810190925260608301848152929390928492909184918401828280156103f35780601f106103c8576101008083540402835291602001916103f3565b820191906000526020600020905b8154815290600101906020018083116103d657829003601f168201915b50505050508152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104955780601f1061046a57610100808354040283529160200191610495565b820191906000526020600020905b81548152906001019060200180831161047857829003601f168201915b5050509183525050600291909101546001600160a01b0316602091820152908252600192909201910161034a565b5050505090505b90565b600060026000868686866040516020016104ea9493929190610779565b60408051808303601f19018152918152815160209283012083529082019290925201600020546001600160a01b031695945050505050565b60035490565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061056957805160ff1916838001178555610596565b82800160010185558215610596579182015b8281111561059657825182559160200191906001019061057b565b506105a29291506105a6565b5090565b6104ca91905b808211156105a257600081556001016105ac565b80356001600160a01b03811681146105d757600080fd5b92915050565b60008083601f8401126105ee578182fd5b50813567ffffffffffffffff811115610605578182fd5b60208301915083602082850101111561061d57600080fd5b9250929050565b600060208284031215610635578081fd5b61063f83836105c0565b9392505050565b6000806000806040858703121561065b578283fd5b843567ffffffffffffffff80821115610672578485fd5b61067e888389016105dd565b90965094506020870135915080821115610696578384fd5b506106a3878288016105dd565b95989497509550505050565b6000806000806000606086880312156106c6578081fd5b853567ffffffffffffffff808211156106dd578283fd5b6106e989838a016105dd565b90975095506020880135915080821115610701578283fd5b5061070e888289016105dd565b9094509250610722905087604088016105c0565b90509295509295909350565b60008151808452815b8181101561075357602081850181015186830182015201610737565b818111156107645782602083870101525b50601f01601f19169290920160200192915050565b60008486833784820181815283858237909201918252509392505050565b6001600160a01b0391909116815260200190565b60208082528251828201819052600091906040908185019080840286018301878501865b8381101561083457603f198984030185528151606081518186526107f58287018261072e565b8a84015192508681038b88015261080c818461072e565b938a01516001600160a01b0316968a01969096525050948701949250908601906001016107cf565b509098975050505050505050565b6020808252601690820152754f6e6c79206f776e65722063616e20646f207468697360501b604082015260600190565b60208082526018908201527f4f6e6c7920666163746f72792063616e20646f20746869730000000000000000604082015260600190565b9081526020019056fea2646970667358221220b991ad4b17676f34f3","realArgs":[],"fromIndex":0,"code":"608060405234801561001057600080fd5b50600080546001600160a01b031916331790556108e8806100326000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806313af40351461006757806326be2e211461007c5780635bb478081461008f578063a47d7a31146100a2578063c05d6c1d146100c0578063c5d6bd8f146100e0575b600080fd5b61007a610075366004610624565b6100f5565b005b61007a61008a3660046106af565b61014a565b61007a61009d366004610624565b6102da565b6100aa610326565b6040516100b791906107ab565b60405180910390f35b6100d36100ce366004610646565b6104cd565b6040516100b79190610797565b6100e8610522565b6040516100b791906108a9565b6000546001600160a01b031633146101285760405162461bcd60e51b815260040161011f90610842565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031633146101745760405162461bcd60e51b815260040161011f90610872565b8060026000878787876040516020016101909493929190610779565b60405160208183030381529060405280519060200120815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055506003604051806060016040528087878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250604080516020601f88018190048102820181019092528681529181019190879087908190840183828082843760009201829052509385525050506001600160a01b0385166020928301528354600181018555938152819020825180519394600302909101926102909284920190610528565b5060208281015180516102a99260018501920190610528565b5060409190910151600290910180546001600160a01b0319166001600160a01b039092169190911790555050505050565b6000546001600160a01b031633146103045760405162461bcd60e51b815260040161011f90610842565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b60606003805480602002602001604051908101604052809291908181526020016000905b828210156104c35760008481526020908190206040805160038602909201805460026001821615610100026000190190911604601f81018590049094028301608090810190925260608301848152929390928492909184918401828280156103f35780601f106103c8576101008083540402835291602001916103f3565b820191906000526020600020905b8154815290600101906020018083116103d657829003601f168201915b50505050508152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104955780601f1061046a57610100808354040283529160200191610495565b820191906000526020600020905b81548152906001019060200180831161047857829003601f168201915b5050509183525050600291909101546001600160a01b0316602091820152908252600192909201910161034a565b5050505090505b90565b600060026000868686866040516020016104ea9493929190610779565b60408051808303601f19018152918152815160209283012083529082019290925201600020546001600160a01b031695945050505050565b60035490565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061056957805160ff1916838001178555610596565b82800160010185558215610596579182015b8281111561059657825182559160200191906001019061057b565b506105a29291506105a6565b5090565b6104ca91905b808211156105a257600081556001016105ac565b80356001600160a01b03811681146105d757600080fd5b92915050565b60008083601f8401126105ee578182fd5b50813567ffffffffffffffff811115610605578182fd5b60208301915083602082850101111561061d57600080fd5b9250929050565b600060208284031215610635578081fd5b61063f83836105c0565b9392505050565b6000806000806040858703121561065b578283fd5b843567ffffffffffffffff80821115610672578485fd5b61067e888389016105dd565b90965094506020870135915080821115610696578384fd5b506106a3878288016105dd565b95989497509550505050565b6000806000806000606086880312156106c6578081fd5b853567ffffffffffffffff808211156106dd578283fd5b6106e989838a016105dd565b90975095506020880135915080821115610701578283fd5b5061070e888289016105dd565b9094509250610722905087604088016105c0565b90509295509295909350565b60008151808452815b8181101561075357602081850181015186830182015201610737565b818111156107645782602083870101525b50601f01601f19169290920160200192915050565b60008486833784820181815283858237909201918252509392505050565b6001600160a01b0391909116815260200190565b60208082528251828201819052600091906040908185019080840286018301878501865b8381101561083457603f198984030185528151606081518186526107f58287018261072e565b8a84015192508681038b88015261080c818461072e565b938a01516001600160a01b0316968a01969096525050948701949250908601906001016107cf565b509098975050505050505050565b6020808252601690820152754f6e6c79206f776e65722063616e20646f207468697360501b604082015260600190565b60208082526018908201527f4f6e6c7920666163746f72792063616e20646f20746869730000000000000000604082015260600190565b9081526020019056fea2646970667358221220b991ad4b17676f34f3b41d66fdcf7aef3f5012b5dd3a9a44a345cf354fa3821764736f6c63430006060033","runtimeBytecode":"608060405234801561001057600080fd5b50600436106100625760003560e01c806313af40351461006757806326be2e211461007c5780635bb478081461008f578063a47d7a31146100a2578063c05d6c1d146100c0578063c5d6bd8f146100e0575b600080fd5b61007a610075366004610624565b6100f5565b005b61007a61008a3660046106af565b61014a565b61007a61009d366004610624565b6102da565b6100aa610326565b6040516100b791906107ab565b60405180910390f35b6100d36100ce366004610646565b6104cd565b6040516100b79190610797565b6100e8610522565b6040516100b791906108a9565b6000546001600160a01b031633146101285760405162461bcd60e51b815260040161011f90610842565b60405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b6001546001600160a01b031633146101745760405162461bcd60e51b815260040161011f90610872565b8060026000878787876040516020016101909493929190610779565b60405160208183030381529060405280519060200120815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055506003604051806060016040528087878080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250505090825250604080516020601f88018190048102820181019092528681529181019190879087908190840183828082843760009201829052509385525050506001600160a01b0385166020928301528354600181018555938152819020825180519394600302909101926102909284920190610528565b5060208281015180516102a99260018501920190610528565b5060409190910151600290910180546001600160a01b0319166001600160a01b039092169190911790555050505050565b6000546001600160a01b031633146103045760405162461bcd60e51b815260040161011f90610842565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b60606003805480602002602001604051908101604052809291908181526020016000905b828210156104c35760008481526020908190206040805160038602909201805460026001821615610100026000190190911604601f81018590049094028301608090810190925260608301848152929390928492909184918401828280156103f35780601f106103c8576101008083540402835291602001916103f3565b820191906000526020600020905b8154815290600101906020018083116103d657829003601f168201915b50505050508152602001600182018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156104955780601f1061046a57610100808354040283529160200191610495565b820191906000526020600020905b81548152906001019060200180831161047857829003601f168201915b5050509183525050600291909101546001600160a01b0316602091820152908252600192909201910161034a565b5050505090505b90565b600060026000868686866040516020016104ea9493929190610779565b60408051808303601f19018152918152815160209283012083529082019290925201600020546001600160a01b031695945050505050565b60035490565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061056957805160ff1916838001178555610596565b82800160010185558215610596579182015b8281111561059657825182559160200191906001019061057b565b506105a29291506105a6565b5090565b6104ca91905b808211156105a257600081556001016105ac565b80356001600160a01b03811681146105d757600080fd5b92915050565b60008083601f8401126105ee578182fd5b50813567ffffffffffffffff811115610605578182fd5b60208301915083602082850101111561061d57600080fd5b9250929050565b600060208284031215610635578081fd5b61063f83836105c0565b9392505050565b6000806000806040858703121561065b578283fd5b843567ffffffffffffffff80821115610672578485fd5b61067e888389016105dd565b90965094506020870135915080821115610696578384fd5b506106a3878288016105dd565b95989497509550505050565b6000806000806000606086880312156106c6578081fd5b853567ffffffffffffffff808211156106dd578283fd5b6106e989838a016105dd565b90975095506020880135915080821115610701578283fd5b5061070e888289016105dd565b9094509250610722905087604088016105c0565b90509295509295909350565b60008151808452815b8181101561075357602081850181015186830182015201610737565b818111156107645782602083870101525b50601f01601f19169290920160200192915050565b60008486833784820181815283858237909201918252509392505050565b6001600160a01b0391909116815260200190565b60208082528251828201819052600091906040908185019080840286018301878501865b8381101561083457603f198984030185528151606081518186526107f58287018261072e565b8a84015192508681038b88015261080c818461072e565b938a01516001600160a01b0316968a01969096525050948701949250908601906001016107cf565b509098975050505050505050565b6020808252601690820152754f6e6c79206f776e65722063616e20646f207468697360501b604082015260600190565b60208082526018908201527f4f6e6c7920666163746f72792063616e20646f20746869730000000000000000604082015260600190565b9081526020019056fea2646970667358221220b991ad4b17676f34f3b41d66fdcf7aef3f5012b5dd3a9a44a345cf354fa3821764736f6c63430006060033","linkReferences":{},"swarmHash":"b41d66fdcf7aef3f5012b5dd3a9a44a345cf354fa3821764736f6c6343000606","gasEstimates":{"creation":{"codeDepositCost":"456000","executionCost":"21328","totalCost":"477328"},"external":{"getLenIndexes()":"1116","indexList()":"infinite","indexes(string,string)":"infinite","setFactory(address)":"22038","setIndex(string,string,address)":"infinite","setOwner(address)":"21994"}},"functionHashes":{"getLenIndexes()":"c5d6bd8f","indexList()":"a47d7a31","indexes(string,string)":"c05d6c1d","setFactory(address)":"5bb47808","setIndex(string,string,address)":"26be2e21","setOwner(address)":"13af4035"},"filename":"/home/st/Desktop/SvetAng2/SvetAng/.embark/contracts/IndexStorage.sol","originalFilename":"contracts/IndexStorage.sol","path":"/home/st/Desktop/SvetAng2/SvetAng/contracts/IndexStorage.sol","type":"file","deploymentAccount":"0xcDD7C0fba0Fe0D7DDf49a0B6B627700F4e26b6F8"};
const IndexStorage = new EmbarkJS.Blockchain.Contract(IndexStorageConfig);

export default IndexStorage;
