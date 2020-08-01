function showMumble() {
    document.getElementById("content").innerHTML = "<h2>Mumble Server Info</h2>\n" +
        "<p><a href=\"mumble://:horologistgray@skyborne.mumble.com:5590?version=1.3.0\">Quick Connect</a> or <a href=\"http://skyborne.mumble.com/\">Web Client</a> (Unstable)</p>\n" +
        "<p>\n" +
        "    IP: skyborne.mumble.com<br/>\n" +
        "    Port: 5590<br/>\n" +
        "    Password: horologistgray<br/>\n" +
        "\n" +
        "</p>\n" +
        "<p><br/>Don't Have Mumble Installed? <a href=\"https://www.mumble.info/downloads/\" target='_blank'>Official Download</a></p>\n";
}

function showAbout() {
    document.getElementById("content").innerHTML = "<h2>About Us</h2>\n" +
        "We are the Guns of Icarus Online (GoIO) clan, [SkBo] Skyborne.<br/>\n" +
        "Check out our Steam group <a href='https://steamcommunity.com/groups/SkBoGoIO' target='_blank'>here</a>.<br/>\n" +
        "If you are looking for the SkBo forum, it has been archived, and is no longer on this site,\n" +
        "<br/><br/><p><b>Leader</b>: Dmitrij K. Rozhkov</p>" +
        "<p><b>Officers</b>: Sundstrom, Rareform K. Rozhkov, -DARK-KNIGHT-, Hadush Dongus.</p>";
}

function showApply() {
    document.getElementById("content").innerHTML = "<h2>Apply to the Skyborne</h2>\n" +
        "<p>If interested, contact an officer in-game. Be like kinda active or a fun person, also being good at the game would be nice.</p>\n" +
        "<p>And remember, SkBo > Ryder.</p>";
}

function paintBackground() {
    document.getElementById("content").style.backgroundColor = "#313045";
}