const joinTime = now.toLocaleString([], {
    dateStyle: 'full',
    timeStyle: 'short',
})
document.getElementById("hidetime").value = joinTime;