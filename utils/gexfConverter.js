function escapeXml(unsafe) {
    return unsafe.replace(/[<>&'"]/g, function (c) {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
    });
}

function convertToGEXF(data) {
    let gexf = '<?xml version="1.0" encoding="UTF-8"?>';
    gexf += '<gexf xmlns="http://www.gexf.net/1.2draft" version="1.2">';
    gexf += '<graph mode="static" defaultedgetype="directed">';

    // Adiciona a seção de atributos
    gexf += '<attributes class="node">';
    gexf += '<attribute id="description" title="Description" type="string"/>';
    gexf += '<attribute id="url" title="URL" type="string"/>';
    gexf += '<attribute id="thumbnail" title="Thumbnail" type="string"/>';
    gexf += '<attribute id="channel" title="Channel" type="string"/>';
    gexf += '<attribute id="publishedAt" title="Published At" type="string"/>';
    gexf += '<attribute id="viewCount" title="View Count" type="integer"/>';
    gexf += '<attribute id="likeCount" title="Like Count" type="integer"/>';
    gexf += '<attribute id="dislikeCount" title="Dislike Count" type="integer"/>';
    gexf += '<attribute id="commentCount" title="Comment Count" type="integer"/>';
    gexf += '<attribute id="latitude" title="Latitude" type="float"/>';
    gexf += '<attribute id="longitude" title="Longitude" type="float"/>';
    gexf += '</attributes>';

    gexf += '<nodes>';

    for (const item of data.items) {
        gexf += `<node id="${item.id}" label="${escapeXml(item.snippet.title)}">`;
        gexf += `<attvalues>`;
        gexf += `<attvalue for="description" value="${escapeXml(item.snippet.description)}"/>`;
        gexf += `<attvalue for="url" value="https://www.youtube.com/watch?v=${item.id}"/>`;
        gexf += `<attvalue for="thumbnail" value="${item.snippet.thumbnails.default.url}"/>`;
        gexf += `<attvalue for="channel" value="${escapeXml(item.snippet.channelTitle)}"/>`;
        gexf += `<attvalue for="publishedAt" value="${item.snippet.publishedAt}"/>`;
        if (item.statistics) {
            gexf += `<attvalue for="viewCount" value="${item.statistics.viewCount}"/>`;
            gexf += `<attvalue for="likeCount" value="${item.statistics.likeCount}"/>`;
            gexf += `<attvalue for="dislikeCount" value="${item.statistics.dislikeCount}"/>`;
            gexf += `<attvalue for="commentCount" value="${item.statistics.commentCount}"/>`;
        }
        if (item.recordingDetails && item.recordingDetails.location) {
            gexf += `<attvalue for="latitude" value="${item.recordingDetails.location.latitude}"/>`;
            gexf += `<attvalue for="longitude" value="${item.recordingDetails.location.longitude}"/>`;
        }
        gexf += `</attvalues>`;
        gexf += `</node>`;
    }

    gexf += '</nodes>';
    gexf += '<edges>';
    // Adicione arestas (edges) se necessário
    gexf += '</edges>';
    gexf += '</graph>';
    gexf += '</gexf>';
    return gexf;
}

module.exports = { convertToGEXF };