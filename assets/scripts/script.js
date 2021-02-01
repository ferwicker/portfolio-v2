const downloadEl = document.querySelectorAll('.fa-file-download');

for (i = 0; i < downloadEl.length; i++) {
    downloadEl[i].setAttribute('href', 'assets/Fer Wicker Resume - March 2020.pdf');
    downloadEl[i].setAttribute('download', 'Fer Wicker Resume');
}
