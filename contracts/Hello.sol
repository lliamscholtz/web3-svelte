// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/access/Ownable.sol";

contract Hello is Ownable {
  string private _greeting = "Hello from the Blockchain";
  
  function greet() external view returns (string memory) {
    return _greeting;
  }

  function updateGreeting(string calldata _newGreeting) external onlyOwner {
    _greeting = _newGreeting;
  }
  
}
