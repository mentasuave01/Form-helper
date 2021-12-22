import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"




// data


// markup


const IndexPage = () => {
  return (
    <main className="">
      <div className=" fixed p-2  w-28 ">
        
      <StaticImage src="../images/mentasuave01.png" alt="Mentasuave01"  />
        </div>
        

      
      
      <div className="
        grid justify-center items-center gap-10 md:p-10
         flex-warp min-h-screen
        bg-gray-800
      ">
        <div id="RPC" className="
        
        bg-gray-400
        shadow-2xl shadow-cyan-500
        rounded-xl mt-10
        h-[700px] w-80 md:w-[800px]
        flex flex-col justify-center items-center 
        font-bold text-xl text-center p-1
        ">
          <p className=" ">
          1.  If you have more than one deposit transaction into the same vault, list all of the transactions with a space between each transaction.
          <br/>2. If you "zapped in" to the vault instead of using the deposit transaction, that's what we'll need instead.
          <br/>3. If you did not withdraw from the vault, just enter "didn't withdraw" or "N/A" or something.
          <br/>4. If you deposited into more than one vault, please fill out a separate form for each vault affected.
          <br/>5. If you can't find these transactions it's okay, as long as you correctly listed your wallet address in the previous question<br/>
          </p>
          
        </div>
        
        
        
        <div id="RPC" className="
        
        bg-gray-400
        shadow-2xl shadow-cyan-500
        rounded-xl
        h-[500px] w-80 md:w-[800px]
        flex flex-col justify-center items-center 
        font-bold text-xl text-center p-2
        ">
          <h1 className="text-2xl font-extrabold"> 1</h1>
          Search your vault address<br/> <a className="text-red-500" target="_blank" rel="noreferrer"   href="https://dashboard.grim.finance/"> HERE</a>
            
          
        </div>

        <div id="RPC" className="
        
        bg-gray-400
        shadow-2xl shadow-cyan-500
        rounded-xl
        h-[500px] w-80 md:w-[800px]
        flex flex-col justify-center items-center 
        font-bold text-xl text-center p-2
        ">
        

          <h1 className=" text-2xl font-extrabold"> 2</h1>
          Paste here<br/>
          <input id="address" className=" mt-2 bg-gray-200 shadow-xl shadow-cyan-500 rounded-lg" type="text" placeholder="Your wallet address"/> 
          <input id="vault" className=" mt-2 bg-gray-200 shadow-xl shadow-cyan-500 rounded-lg" type="text" placeholder="vault_address"/>
          <button className="rounded-full mt-10 bg-cyan-600  px-2 text-white border-2 border-black" onClick={search4vaults}>
           submit
          </button>
          
          
          

            
          
        </div>

        <div id="RPC" className="
        
        bg-gray-400
        shadow-2xl shadow-cyan-500
        rounded-xl
        h-[500px] w-80 md:w-[800px]
        flex flex-col justify-center items-center 
        font-bold text-xl text-center p-2
        ">
          <h1 className=" text-2xl font-extrabold"> 3</h1>
          Form data<br/> 
          
         
          <div id="elbirbo" className="w-52 rounded-xl bg-gray-200">    

          </div>
         
          
          
          


            
          
        </div>

        
        
      </div>
      
    </main>
  )
}

export default IndexPage




function search4vaults() {
  

  

  var myHeaders = new Headers();
  myHeaders.append("sec-ch-ua", "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"");
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36");
  myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
  myHeaders.append("Accept", "*/*");

  const address = document.getElementById("address").value
  const vault = document.getElementById("vault").value
  const data = document.getElementById("elbirbo")

  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };


  if(address.length === 42 && vault.length === 42){
    data.innerHTML ="";
    fetch(`https://api.debank.com/history/list?chain=ftm&page_count=100&start_time=0&token_id=${vault}&user_addr=${address}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      var obj = JSON.parse(result)
      //console.log(obj.data.history_list.length)
      var i=obj.data.history_list.length - 1;
     // console.log(i)


     function addElement_deposit () {
      // create a new div element
      const depo = document.createElement("p");
      const tx = document.createElement("p");
      const val = document.createElement("p");
      const value= document.createElement("p");
    
      // and give it some content
      const depoContent = document.createTextNode(`Deposit txhash:`);
      const txContent = document.createTextNode(` https://ftmscan.com/tx/${obj.data.history_list[i].id}`);
      const valContent = document.createTextNode(`Value:`);
      const valueContent = document.createTextNode(`${obj.data.history_list[i].receives[0].amount}`);

      // add the text node to the newly created div
      depo.appendChild(depoContent);
      tx.appendChild(txContent);
      val.appendChild(valContent);
      value.appendChild(valueContent);

      //add className
      depo.className = "  text-green-500    	 "
      tx.className = "    break-words   	 "

    
      // add the newly created element and its content into the DOM
      
      data.appendChild(depo);
      data.appendChild(tx);
      data.appendChild(val);
      data.appendChild(value);


    }

    
    function addElement_withdraw () {     // create a new div element
      const depo = document.createElement("p");
      const tx = document.createElement("p");
      const val = document.createElement("p");
      const value= document.createElement("p");
    
      // and give it some content
      const depoContent = document.createTextNode(`Withdraw txhash:`);
      const txContent = document.createTextNode(` https://ftmscan.com/tx/${obj.data.history_list[i].id}`);
      const valContent = document.createTextNode(`Value:`);
      const valueContent = document.createTextNode(`${obj.data.history_list[i].sends[0].amount}`);

      // add the text node to the newly created div
      depo.appendChild(depoContent);
      tx.appendChild(txContent);
      val.appendChild(valContent);
      value.appendChild(valueContent);

      //add className
      depo.className = "text-red-500       	 "
      tx.className = "   break-words 	 "
      
      
      
      
      
    
      // add the newly created element and its content into the DOM
      
      data.appendChild(depo);
      data.appendChild(tx);
      data.appendChild(val);
      data.appendChild(value);
      

      
    }
    
    

      while (i>=0) {
        // if tx_name= withdrawAll sends_amount
      // if tx_name= depositAll recives_amount
        //console.log(obj.data.history_list[i].tx.name)
        if(obj.data.history_list[i].tx.name==="depositAll"){
          
          console.log(obj.data.history_list[i].id)
          console.log(obj.data.history_list[i].receives[0].amount)
          addElement_deposit();
          
          
          

         


          
          // data.innerHTML = `<p class=" w-52 rounded-xl p-2 truncate hover:text-clip bg-white text-red-500 ">${obj.data.history_list[i].id}<br> ${obj.data.history_list[i].receives[0].amount}</p>`
        }

        if(obj.data.history_list[i].tx.name==="withdrawAll"){
          console.log(obj.data.history_list[i].id)
          console.log(obj.data.history_list[i].sends[0].amount)
          addElement_withdraw();
          
         
         
        }
        
        i--;
      }

      

      
    })
    .catch(error => console.log('error', error));
  }else{
    console.log("error");
  }

  

  
  

}