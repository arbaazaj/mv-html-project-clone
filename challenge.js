document.addEventListener("DOMContentLoaded", function(){
  addWavyUnderline(findAllUnorderedListElements());
  displayProjects();
  getSocialText();
  //prepareProjects('Amazing project', 'Awesome project', 'Beautiful project');
});

function addWavyUnderline(elements) {
  let array = elements;
  array.forEach(element => {
    //element.style.textDecoration = 'wavy underline';
  });
}

function displayProjects() {
  let preprojects = prepareProjects('Amazing project', 'Awesome project', 'Beautiful project');
  let div = document.getElementById('projects');
  div.appendChild(preprojects);
}

function findAllUnorderedListElements() {
  return document.querySelectorAll("#social ul a");
}

function getSocialText() {
  //let social =  document.querySelectorAll("#social ul a");
  let list = findAllUnorderedListElements();
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    //console.log(item.textContent);
    return item;
  }
}

function prepareProjects(firstProject, secondProject, thirdProject) {
  let arrayOfProjects = [firstProject, secondProject, thirdProject];
    let project = document.getElementById('projects');
    let output = '';
    for(let i = 0; i < arrayOfProjects.length; i++) {
      if (arrayOfProjects[i].length > 20) {
        let pTag = '<p>' + arrayOfProjects[i] + '</p>' + '<br>';
        output += pTag;
        // let pTag = document.createElement('p');
        // let breakTag = document.createElement('br');
        // project.appendChild(pTag).innerHTML = arrayOfProjects[i];
        // project.appendChild(breakTag);
      } else {
        let spanTag = '<span>' + arrayOfProjects[i] + '</span>' + '<br>';
        output += spanTag;
        // let spanTag = document.createElement('span');
        // let breakTag = document.createElement('br');
        // project.appendChild(spanTag).innerHTML = arrayOfProjects[i];
        // project.appendChild(breakTag);
      }
    }
    project.innerHTML = output;
    return output;
}

exports.getSocialText = getSocialText;
exports.findAllUnorderedListElements = findAllUnorderedListElements;
exports.prepareProjects = prepareProjects;









