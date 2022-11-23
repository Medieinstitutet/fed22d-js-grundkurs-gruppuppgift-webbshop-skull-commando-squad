const sortByNameBtnStart = document.querySelector(".nameSortStart");
const sortByNameBtnEnd = document.querySelector(".nameSortEnd");

sortByNameBtnStart.addEventListener("click", sortByNameStart);
sortByNameBtnEnd.addEventListener("click", sortByNameEnd);

function sortByNameStart() {
  const sorted = donuts.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  renderDonuts();
}

function sortByNameEnd() {
  const sorted = donuts.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }

    if (a.name < b.name) {
      return 1;
    }
    return 0;
  });

  renderDonuts();
}
