import EmbarkJS from '../embarkjs';

const ResolverConfig = {"abiDefinition":[{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"key","type":"string"},{"name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x10f13a8c"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"},{"name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"name":"contentType","type":"uint256"},{"name":"data","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x2203ab56"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"x","type":"bytes32"},{"name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x29cd62ea"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"content","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x2dff6941"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"addr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x3b3b57de"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"},{"name":"key","type":"string"}],"name":"text","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x59d1d43c"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"contentType","type":"uint256"},{"name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x623195b0"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x691f3431"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x77372213"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"hash","type":"bytes32"}],"name":"setContent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xc3d014d6"},{"constant":true,"inputs":[{"name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"name":"x","type":"bytes32"},{"name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function","signature":"0xc8690233"},{"constant":false,"inputs":[{"name":"node","type":"bytes32"},{"name":"addr","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0xd5fa2b00"},{"inputs":[{"name":"ensAddr","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor","name":"constructor","signature":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"a","type":"address"}],"name":"AddrChanged","type":"event","signature":"0x52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd2"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"hash","type":"bytes32"}],"name":"ContentChanged","type":"event","signature":"0x0424b6fe0d9c3bdbece0e7879dc241bb0c22e900be8b6c168b4ee08bd9bf83bc"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"name","type":"string"}],"name":"NameChanged","type":"event","signature":"0xb7d29e911041e8d9b843369e890bcb72c9388692ba48b65ac54e7214c4c348f7"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":true,"name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event","signature":"0xaa121bbeef5f32f5961a2a28966e769023910fc9479059ee3495d4c1a696efe3"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"x","type":"bytes32"},{"indexed":false,"name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event","signature":"0x1d6f5e03d3f63eb58751986629a5439baee5079ff04f345becb66e23eb154e46"},{"anonymous":false,"inputs":[{"indexed":true,"name":"node","type":"bytes32"},{"indexed":false,"name":"indexedKey","type":"string"},{"indexed":false,"name":"key","type":"string"}],"name":"TextChanged","type":"event","signature":"0xd8c9334b1a9c2f9da342a0a2b32629c1a229b6445dad78947f674b44444a7550"}],"deployedAddress":"0x10Aa1c9C2ad79b240Dc612cd2c0c0f5513bAfF28","className":"Resolver","args":["0x04D45b51fe4f00b4478F8b0719Fa779f14c8A194"],"gas":798646,"gasPrice":"2000000000","silent":true,"track":true,"deploy":true,"realRuntimeBytecode":"6080604052600436106100b95763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166310f13a8c81146100be5780632203ab561461015c57806329cd62ea146101f65780632dff6941146102145780633b3b57de1461023e57806359d1d43c1461027f578063623195b014610352578063691f3431146103b257806377372213146103ca578063c3d014d614610428578063c869023314610443578063d5fa2b0014610474575b600080fd5b3480156100ca57600080fd5b5060408051602060046024803582810135601f810185900485028601850190965285855261015a95833595369560449491939091019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a9998810197919650918201945092508291508401838280828437509497506104a59650505050505050565b005b34801561016857600080fd5b5061017760043560243561063a565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156101ba5781810151838201526020016101a2565b50505050905090810190601f1680156101e75780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561020257600080fd5b5061015a600435602435604435610746565b34801561022057600080fd5b5061022c6004356107b5565b60408051918252519081900360200190f35b34801561024a57600080fd5b506102566004356107cb565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561028b57600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526102dd9583359536956044949193909101919081908401838280828437509497506107f39650505050505050565b6040805160208082528351818301528351919283929083019185019080838360005b838110156103175781810151838201526020016102ff565b50505050905090810190601f1680156103445780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561035e57600080fd5b50604080516020600460443581810135601f810184900484028501840190955284845261015a9482359460248035953695946064949201919081908401838280828437509497506108fc9650505050505050565b3480156103be57600080fd5b506102dd60043561096c565b3480156103d657600080fd5b5060408051602060046024803582810135601f810185900485028601850190965285855261015a958335953695604494919390910191908190840183828082843750949750610a109650505050505050565b34801561043457600080fd5b5061015a600435602435610ad5565b34801561044f57600080fd5b5061045b600435610b25565b6040805192835260208301919091528051918290030190f35b34801561048057600080fd5b5061015a60043573ffffffffffffffffffffffffffffffffffffffff60243516610b42565b826000848152600160209081526040918290209151855185936005019287929182918401908083835b602083106104ed5780518252601f1990920191602091820191016104ce565b51815160209384036101000a6000190180199092169116179052920194855250604051938490038101909320845161052e9591949190910192509050610bc2565b5083600019167fd8c9334b1a9c2f9da342a0a2b32629c1a229b6445dad78947f674b44444a75508485604051808060200180602001838103835285818151815260200191508051906020019080838360005b83811015610598578181015183820152602001610580565b50505050905090810190601f1680156105c55780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156105f85781810151838201526020016105e0565b50505050905090810190601f1680156106255780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a250505050565b60008281526001602081905260409091206060905b83831161073957828416158015906106885750600083815260068201602052604081205460026000196101006001841615020190911604115b1561072e57600083815260068201602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156107225780601f106106f757610100808354040283529160200191610722565b820191906000526020600020905b81548152906001019060200180831161070557829003601f168201915b5050505050915061073e565b60029092029161064f565b600092505b509250929050565b82604080518082018252848152602080820185815260008881526001835284902092516003840155516004909201919091558151858152908101849052815186927f1d6f5e03d3f63eb58751986629a5439baee5079ff04f345becb66e23eb154e46928290030190a250505050565b6000908152600160208190526040909120015490565b60009081526001602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600082815260016020908152604091829020915183516060936005019285929182918401908083835b6020831061083b5780518252601f19909201916020918201910161081c565b518151600019602094850361010090810a820192831692199390931691909117909252949092019687526040805197889003820188208054601f60026001831615909802909501169590950492830182900482028801820190528187529294509250508301828280156108ef5780601f106108c4576101008083540402835291602001916108ef565b820191906000526020600020905b8154815290600101906020018083116108d257829003601f168201915b5050505050905092915050565b82600019830183161561090e57600080fd5b60008481526001602090815260408083208684526006018252909120835161093892850190610bc2565b50604051839085907faa121bbeef5f32f5961a2a28966e769023910fc9479059ee3495d4c1a696efe390600090a350505050565b6000818152600160208181526040928390206002908101805485516000199582161561010002959095011691909104601f81018390048302840183019094528383526060939091830182828015610a045780601f106109d957610100808354040283529160200191610a04565b820191906000526020600020905b8154815290600101906020018083116109e757829003601f168201915b50505050509050919050565b8160008381526001602090815260409091208351610a3692600290920191850190610bc2565b50604080516020808252845181830152845186937fb7d29e911041e8d9b843369e890bcb72c9388692ba48b65ac54e7214c4c348f79387939092839283019185019080838360005b83811015610a96578181015183820152602001610a7e565b50505050905090810190601f168015610ac35780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b816000838152600160208181526040928390209091018490558151848152915185927f0424b6fe0d9c3bdbece0e7879dc241bb0c22e900be8b6c168b4ee08bd9bf83bc92908290030190a2505050565b600090815260016020526040902060038101546004909101549091565b81600083815260016020908152604091829020805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff86169081179091558251908152915185927f52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd292908290030190a2505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c0357805160ff1916838001178555610c30565b82800160010185558215610c30579182015b82811115610c30578251825591602001919060010190610c15565b50610c3c929150610c40565b5090565b610c5a91905b80821115610c3c5760008155600101610c46565b905600a165627a7a72305820","realArgs":[],"code":"608060405234801561001057600080fd5b50604051602080610cdb833981016040525160008054600160a060020a03909216600160a060020a0319909216919091179055610c89806100526000396000f3006080604052600436106100b95763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166310f13a8c81146100be5780632203ab561461015c57806329cd62ea146101f65780632dff6941146102145780633b3b57de1461023e57806359d1d43c1461027f578063623195b014610352578063691f3431146103b257806377372213146103ca578063c3d014d614610428578063c869023314610443578063d5fa2b0014610474575b600080fd5b3480156100ca57600080fd5b5060408051602060046024803582810135601f810185900485028601850190965285855261015a95833595369560449491939091019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a9998810197919650918201945092508291508401838280828437509497506104a59650505050505050565b005b34801561016857600080fd5b5061017760043560243561063a565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156101ba5781810151838201526020016101a2565b50505050905090810190601f1680156101e75780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561020257600080fd5b5061015a600435602435604435610746565b34801561022057600080fd5b5061022c6004356107b5565b60408051918252519081900360200190f35b34801561024a57600080fd5b506102566004356107cb565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561028b57600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526102dd9583359536956044949193909101919081908401838280828437509497506107f39650505050505050565b6040805160208082528351818301528351919283929083019185019080838360005b838110156103175781810151838201526020016102ff565b50505050905090810190601f1680156103445780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561035e57600080fd5b50604080516020600460443581810135601f810184900484028501840190955284845261015a9482359460248035953695946064949201919081908401838280828437509497506108fc9650505050505050565b3480156103be57600080fd5b506102dd60043561096c565b3480156103d657600080fd5b5060408051602060046024803582810135601f810185900485028601850190965285855261015a958335953695604494919390910191908190840183828082843750949750610a109650505050505050565b34801561043457600080fd5b5061015a600435602435610ad5565b34801561044f57600080fd5b5061045b600435610b25565b6040805192835260208301919091528051918290030190f35b34801561048057600080fd5b5061015a60043573ffffffffffffffffffffffffffffffffffffffff60243516610b42565b826000848152600160209081526040918290209151855185936005019287929182918401908083835b602083106104ed5780518252601f1990920191602091820191016104ce565b51815160209384036101000a6000190180199092169116179052920194855250604051938490038101909320845161052e9591949190910192509050610bc2565b5083600019167fd8c9334b1a9c2f9da342a0a2b32629c1a229b6445dad78947f674b44444a75508485604051808060200180602001838103835285818151815260200191508051906020019080838360005b83811015610598578181015183820152602001610580565b50505050905090810190601f1680156105c55780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156105f85781810151838201526020016105e0565b50505050905090810190601f1680156106255780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a250505050565b60008281526001602081905260409091206060905b83831161073957828416158015906106885750600083815260068201602052604081205460026000196101006001841615020190911604115b1561072e57600083815260068201602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156107225780601f106106f757610100808354040283529160200191610722565b820191906000526020600020905b81548152906001019060200180831161070557829003601f168201915b5050505050915061073e565b60029092029161064f565b600092505b509250929050565b82604080518082018252848152602080820185815260008881526001835284902092516003840155516004909201919091558151858152908101849052815186927f1d6f5e03d3f63eb58751986629a5439baee5079ff04f345becb66e23eb154e46928290030190a250505050565b6000908152600160208190526040909120015490565b60009081526001602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600082815260016020908152604091829020915183516060936005019285929182918401908083835b6020831061083b5780518252601f19909201916020918201910161081c565b518151600019602094850361010090810a820192831692199390931691909117909252949092019687526040805197889003820188208054601f60026001831615909802909501169590950492830182900482028801820190528187529294509250508301828280156108ef5780601f106108c4576101008083540402835291602001916108ef565b820191906000526020600020905b8154815290600101906020018083116108d257829003601f168201915b5050505050905092915050565b82600019830183161561090e57600080fd5b60008481526001602090815260408083208684526006018252909120835161093892850190610bc2565b50604051839085907faa121bbeef5f32f5961a2a28966e769023910fc9479059ee3495d4c1a696efe390600090a350505050565b6000818152600160208181526040928390206002908101805485516000199582161561010002959095011691909104601f81018390048302840183019094528383526060939091830182828015610a045780601f106109d957610100808354040283529160200191610a04565b820191906000526020600020905b8154815290600101906020018083116109e757829003601f168201915b50505050509050919050565b8160008381526001602090815260409091208351610a3692600290920191850190610bc2565b50604080516020808252845181830152845186937fb7d29e911041e8d9b843369e890bcb72c9388692ba48b65ac54e7214c4c348f79387939092839283019185019080838360005b83811015610a96578181015183820152602001610a7e565b50505050905090810190601f168015610ac35780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b816000838152600160208181526040928390209091018490558151848152915185927f0424b6fe0d9c3bdbece0e7879dc241bb0c22e900be8b6c168b4ee08bd9bf83bc92908290030190a2505050565b600090815260016020526040902060038101546004909101549091565b81600083815260016020908152604091829020805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff86169081179091558251908152915185927f52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd292908290030190a2505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c0357805160ff1916838001178555610c30565b82800160010185558215610c30579182015b82811115610c30578251825591602001919060010190610c15565b50610c3c929150610c40565b5090565b610c5a91905b80821115610c3c5760008155600101610c46565b905600a165627a7a72305820820458ee1fb63da1465b0a1fbcba8ca7c04249db10a2c939ebf73d487bd5a83d0029","runtimeBytecode":"6080604052600436106100b95763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166310f13a8c81146100be5780632203ab561461015c57806329cd62ea146101f65780632dff6941146102145780633b3b57de1461023e57806359d1d43c1461027f578063623195b014610352578063691f3431146103b257806377372213146103ca578063c3d014d614610428578063c869023314610443578063d5fa2b0014610474575b600080fd5b3480156100ca57600080fd5b5060408051602060046024803582810135601f810185900485028601850190965285855261015a95833595369560449491939091019190819084018382808284375050604080516020601f89358b018035918201839004830284018301909452808352979a9998810197919650918201945092508291508401838280828437509497506104a59650505050505050565b005b34801561016857600080fd5b5061017760043560243561063a565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b838110156101ba5781810151838201526020016101a2565b50505050905090810190601f1680156101e75780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561020257600080fd5b5061015a600435602435604435610746565b34801561022057600080fd5b5061022c6004356107b5565b60408051918252519081900360200190f35b34801561024a57600080fd5b506102566004356107cb565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b34801561028b57600080fd5b5060408051602060046024803582810135601f81018590048502860185019096528585526102dd9583359536956044949193909101919081908401838280828437509497506107f39650505050505050565b6040805160208082528351818301528351919283929083019185019080838360005b838110156103175781810151838201526020016102ff565b50505050905090810190601f1680156103445780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561035e57600080fd5b50604080516020600460443581810135601f810184900484028501840190955284845261015a9482359460248035953695946064949201919081908401838280828437509497506108fc9650505050505050565b3480156103be57600080fd5b506102dd60043561096c565b3480156103d657600080fd5b5060408051602060046024803582810135601f810185900485028601850190965285855261015a958335953695604494919390910191908190840183828082843750949750610a109650505050505050565b34801561043457600080fd5b5061015a600435602435610ad5565b34801561044f57600080fd5b5061045b600435610b25565b6040805192835260208301919091528051918290030190f35b34801561048057600080fd5b5061015a60043573ffffffffffffffffffffffffffffffffffffffff60243516610b42565b826000848152600160209081526040918290209151855185936005019287929182918401908083835b602083106104ed5780518252601f1990920191602091820191016104ce565b51815160209384036101000a6000190180199092169116179052920194855250604051938490038101909320845161052e9591949190910192509050610bc2565b5083600019167fd8c9334b1a9c2f9da342a0a2b32629c1a229b6445dad78947f674b44444a75508485604051808060200180602001838103835285818151815260200191508051906020019080838360005b83811015610598578181015183820152602001610580565b50505050905090810190601f1680156105c55780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156105f85781810151838201526020016105e0565b50505050905090810190601f1680156106255780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a250505050565b60008281526001602081905260409091206060905b83831161073957828416158015906106885750600083815260068201602052604081205460026000196101006001841615020190911604115b1561072e57600083815260068201602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845290918301828280156107225780601f106106f757610100808354040283529160200191610722565b820191906000526020600020905b81548152906001019060200180831161070557829003601f168201915b5050505050915061073e565b60029092029161064f565b600092505b509250929050565b82604080518082018252848152602080820185815260008881526001835284902092516003840155516004909201919091558151858152908101849052815186927f1d6f5e03d3f63eb58751986629a5439baee5079ff04f345becb66e23eb154e46928290030190a250505050565b6000908152600160208190526040909120015490565b60009081526001602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600082815260016020908152604091829020915183516060936005019285929182918401908083835b6020831061083b5780518252601f19909201916020918201910161081c565b518151600019602094850361010090810a820192831692199390931691909117909252949092019687526040805197889003820188208054601f60026001831615909802909501169590950492830182900482028801820190528187529294509250508301828280156108ef5780601f106108c4576101008083540402835291602001916108ef565b820191906000526020600020905b8154815290600101906020018083116108d257829003601f168201915b5050505050905092915050565b82600019830183161561090e57600080fd5b60008481526001602090815260408083208684526006018252909120835161093892850190610bc2565b50604051839085907faa121bbeef5f32f5961a2a28966e769023910fc9479059ee3495d4c1a696efe390600090a350505050565b6000818152600160208181526040928390206002908101805485516000199582161561010002959095011691909104601f81018390048302840183019094528383526060939091830182828015610a045780601f106109d957610100808354040283529160200191610a04565b820191906000526020600020905b8154815290600101906020018083116109e757829003601f168201915b50505050509050919050565b8160008381526001602090815260409091208351610a3692600290920191850190610bc2565b50604080516020808252845181830152845186937fb7d29e911041e8d9b843369e890bcb72c9388692ba48b65ac54e7214c4c348f79387939092839283019185019080838360005b83811015610a96578181015183820152602001610a7e565b50505050905090810190601f168015610ac35780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b816000838152600160208181526040928390209091018490558151848152915185927f0424b6fe0d9c3bdbece0e7879dc241bb0c22e900be8b6c168b4ee08bd9bf83bc92908290030190a2505050565b600090815260016020526040902060038101546004909101549091565b81600083815260016020908152604091829020805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff86169081179091558251908152915185927f52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd292908290030190a2505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c0357805160ff1916838001178555610c30565b82800160010185558215610c30579182015b82811115610c30578251825591602001919060010190610c15565b50610c3c929150610c40565b5090565b610c5a91905b80821115610c3c5760008155600101610c46565b905600a165627a7a72305820820458ee1fb63da1465b0a1fbcba8ca7c04249db10a2c939ebf73d487bd5a83d0029","swarmHash":"820458ee1fb63da1465b0a1fbcba8ca7c04249db10a2c939ebf73d487bd5a83d","gasEstimates":{"creation":{"codeDepositCost":"641800","executionCost":"21101","totalCost":"662901"},"external":{"ABI(bytes32,uint256)":"infinite","addr(bytes32)":"559","content(bytes32)":"534","name(bytes32)":"infinite","pubkey(bytes32)":"924","setABI(bytes32,uint256,bytes)":"infinite","setAddr(bytes32,address)":"22154","setContent(bytes32,bytes32)":"21883","setName(bytes32,string)":"infinite","setPubkey(bytes32,bytes32,bytes32)":"42083","setText(bytes32,string,string)":"infinite","text(bytes32,string)":"infinite"}},"functionHashes":{"ABI(bytes32,uint256)":"2203ab56","addr(bytes32)":"3b3b57de","content(bytes32)":"2dff6941","name(bytes32)":"691f3431","pubkey(bytes32)":"c8690233","setABI(bytes32,uint256,bytes)":"623195b0","setAddr(bytes32,address)":"d5fa2b00","setContent(bytes32,bytes32)":"c3d014d6","setName(bytes32,string)":"77372213","setPubkey(bytes32,bytes32,bytes32)":"29cd62ea","setText(bytes32,string,string)":"10f13a8c","text(bytes32,string)":"59d1d43c"},"filename":"C:/dev/embark/lib/modules/ens/contracts/Resolver.sol","type":"file","_gasLimit":false,"deploymentAccount":"0xB8D851486d1C953e31A44374ACa11151D49B8bb3","transactionHash":"0x15756e9d87243a269fc0acc49d8d879f6196372b6f7eb19fb5c29274b3fabe07"};
const Resolver = new EmbarkJS.Blockchain.Contract(ResolverConfig);

export default Resolver;
