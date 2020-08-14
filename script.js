function openingTag(tagName) {
    return '<' + tagName + '>'
}

function closingTag(tagName) {
    return '</' + tagName + '>'
}

function element(tagName, children) {
    if (typeof children === 'undefined') {
        return openingTag(tagName) + closingTag(tagName)
    }

    if (typeof children === 'string') {
        return openingTag(tagName) + children + closingTag(tagName)
    }

    if (typeof children === 'number') {
        return openingTag(tagName) + children.toString() + closingTag(tagName)
    }

    if (Array.isArray(children)) {
        var content = ''
        for (var i = 0; i < children.length; i = i + 1) {
            content = content + children[i]
        }
        return openingTag(tagName) + content + closingTag(tagName)
    }

    return openingTag(tagName) + closingTag(tagName)
}

function td(children) { return element('td', children) }
function tr(children) { return element('tr', children) }

var allData = []

function submit() {
    var inputNama = document.getElementById('nama')
    var inputAlamat = document.getElementById('alamat')
    var tbody = document.getElementById('tbody')

    var data = { nama: inputNama.value, alamat: inputAlamat.value, }
    allData.push(data)
    var content = ''
    for (var i = 0; i < allData.length; i++) {
        var item = allData[i]
        content += tr([td(item.nama), td(data.alamat)])
    }
    tbody.innerHTML = content
}