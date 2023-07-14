# COUNTERFEIT PRODUCT DETECTION AND IDENTIFICATION USING BLOCK-CHAIN TECHNOLOGY

Counterfeit products pose a significant challenge globally, causing economic losses and potential harm to public health. Blockchain technology offers a promising solution by providing a secure and transparent platform for product authentication.<br>
The objective of this project is to propose a blockchain-based solution(make blockchain supply chain) which runs on Ethereum blockchain for detecting counterfeit products, ensuring authenticity and traceability while protecting consumer interests and brand reputation.<br> The solution implements a smart contract based on solidity and explores the use of smart contracts to automate detection and identification, enhancing security. Overall, the goal is to improve the transparency of managing counterfeit product records, combat corruption, promote economic growth, and ensure social justice in this field.

<h2>Commands to run</h2>
  <h5>install proper node modules, and edit .env according to your MetaMask and Alchemy account details</h5>
1. goto mongo_async_crud folder:
   <h5>npm run dev</h5>
2. goto prj_new/login:
   <h5>npm run</h5>
   
<h2>Major Functionalities<h2>
  
<h3>End Users</h3>
  
<h4>1. Manufacturer </h4>
  <h5> (i) Adding product to the blockchain supply chain:</h5>
The provided functionality enables manufacturers to seamlessly add their products to the blockchain network. To accomplish this, the Manufacturer logs into his account using his credentials like username and password which are stored in the cloud database. The manufacturer simply needs to fill out the necessary product details in a user-friendly form and proceed by clicking the submit button. Upon submission, a MetaMask pop-up window will appear, requiring the manufacturer’s confirmation to initiate the transaction for securely storing the product details on the blockchain. This streamlined process ensures efficient and reliable storage of product information within the blockchain network.<br>
Within the system, manufacturers have the ability to generate a distinctive QR code for each batch, which includes a unique batch ID. This batch ID serves as a reference point for searching and retrieving product information from the blockchain. Manufacturers are provided with the option to save this QR code locally, allowing them to conveniently attach it to their respective products as needed. By utilizing this QR code system, manufacturers can streamline the process of accessing product details securely stored on the blockchain.<br>

<h5> (ii) Distribution of products to different retailers:</h5>
The provided functionality empowers users to efficiently distribute products to various retailers, leveraging the unique retailer ID, location, and desired product quantities for each retailer. Once the distribution details are entered, users can confirm the transaction using MetaMask, which triggers the storage of all distribution information securely on the blockchain. This streamlined process ensures accurate tracking and traceability of product distribution, enhancing transparency and efficiency throughout the supply chain.<br>
Manufacturers have the capability to distribute products to multiple retailers. In cases where the desired product quantity for distribution exceeds the available stock held by the manufacturer, an error popup promptly notifies the manufacturer. This alert serves as a reminder that the remaining product quantity is insufficient to fulfill the requested distribution. By providing this informative prompt, manufacturers can effectively manage their inventory and ensure the accurate allocation of products to retailers, maintaining transparency and preventing potential distribution discrepancies.<br>
  
<h4>2. Retailer </h4>
<h5> (i) Searching the product details:</h5>
This functionality helps the retailer to search for the product. After uploading QR Code a batch id is generated through which the user can search the product and validate whether the product is been sent by a legitimate manufacturer or not.<br>

<h5> (ii) Updating product details:</h5>
This functionality will allow a retailer to update the product state by confirming the batch id of the product, and the count of products that he has received. After confirming the transaction the state of the product is updated in the blockchain.
In case the count or destination is not matched with those entered by the manufacturer, counterfeiting in the product will be detected and thus reverting the transaction of the retailer to update product details in the supply chain.
  

<h4>3. Customer </h4>
  (i) Consumers can check the integrity of the product by scanning the QR code which will list the complete supply chain history of transactions and thus verify the genuineness of the product.<br>
  (ii) When the customer purchases the product after scanning the QR they can check the supply chain history, if the last location is not matched with the purchase location, or if the count received by a retailer does not match with that supplied by the manufacturer, the system identifies and displays any retailers where counterfeit products have been detected. This powerful feature empowers customers to authenticate the legitimacy of the products they are purchasing, promoting consumer trust and safeguarding against counterfeit goods.<br>
  
<h2>Conclusion</h2>
Implementing a counterfeit management system using blockchain technology offers a promising solution to address the pervasive issue of counterfeiting. Blockchain's unique characteristics, such as immutability, transparency, and decentralized consensus, provide a solid foundation for building a robust and trustworthy system.<br>
The developed framework leverages blockchains and smart contracts as powerful tools for revolutionizing supply chain management. By utilizing intelligent smart contracts and the inherent trust provided by blockchain technology, we can eliminate the need for human intermediaries in coordinating multiple parties involved in supply chain operations. This approach simplifies and reduces the cost of establishing supply chains that rely on peer-level participation, with a primary focus on ensuring product authenticity.<br>
