function showMumble() {
    document.getElementById("content").innerHTML = "<h2>Mumble Server Info</h2>\n" +
        "<p><a href=\"mumble://:horologistgray@skyborne.mumble.com:5590?version=1.3.0\">Quick Connect</a> or <a href=\"http://skyborne.mumble.com/\">Web Client</a></p>\n" +
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
        "                    <p>We are the Guns of Icarus Online (GoIO) clan, The Skyborne (SkBo).</p>\n" +
        "                    <p>\n" +
        "                        <b>Leader</b>: <a href=\"https://steamcommunity.com/id/DEEKAYR\">Dmitrij K. Rozhkov</a><br>\n" +
        "                        <b>Officers</b>: <a href=\"https://steamcommunity.com/id/rareform_/\">Rareform</a>, <a href=\"https://steamcommunity.com/profiles/76561198014686128\">Sundstrom</a>, <a href=\"https://steamcommunity.com/profiles/76561197984868488\">Hadush</a>, and <a href=\"https://steamcommunity.com/id/-DARK-KNIGHT-\">Dark</a>.\n" +
        "                    </p>";
}

function showApply() {
    document.getElementById("content").innerHTML = "<h2>Apply to the Skyborne</h2>\n" +
        "<p>If Interested, contact an officer in-game, through steam, or connect to the Mumble server and say hello.</p>";
}

function paintBackground() {
    document.getElementById("content").style.backgroundColor = "#313045";
}