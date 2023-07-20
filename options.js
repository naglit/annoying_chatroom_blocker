document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('addRid').addEventListener('click', function() {
    addRidField('', '');
  });

  document.getElementById('save').addEventListener('click', function() {
    let ridFields = document.querySelectorAll('.rid-item');
    let dataRids = [];
    for (let ridField of ridFields) {
      let name = ridField.querySelector('.rid-name').value;
      let value = ridField.querySelector('.rid-value').value;
      dataRids.push({name, value});
    }
    chrome.storage.sync.set({dataRids}, function() {
      console.log('Configuration data saved');
    });
  });

  chrome.storage.sync.get(['dataRids'], function(result) {
    if (result.dataRids) {
      for (let rid of result.dataRids) {
        addRidField(rid.name, rid.value);
      }
    }
  });
});

function addRidField(name, value) {
  let div = document.createElement('div');
  div.className = 'rid-item';

  let nameLabel = document.createElement('label');
  nameLabel.innerHTML = "Chatwork Room Name: ";
  div.appendChild(nameLabel);

  let nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.className = 'rid-name';
  nameInput.value = name;
  div.appendChild(nameInput);

  let valueLabel = document.createElement('label');
  valueLabel.innerHTML = "Data-rid value: ";
  div.appendChild(valueLabel);

  let valueInput = document.createElement('input');
  valueInput.type = 'text';
  valueInput.className = 'rid-value';
  valueInput.value = value;
  div.appendChild(valueInput);

  document.getElementById('ridList').appendChild(div);
}
