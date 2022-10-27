// export const SpineInit = async () =>{
//     const spine = await import('@esotericsoftware/spine-player');
//     const config = {
//         jsonUrl: "http://esotericsoftware.com/files/examples/4.0/spineboy/export/spineboy-pro.json",
//         atlasUrl: "http://esotericsoftware.com/files/examples/4.0/spineboy/export/spineboy.atlas",
//         showControls: false,
//     };
//     return new spine.SpinePlayer('container', config);
// }


async function SpineInit() {
    const spine = await import('@esotericsoftware/spine-player');
    const config = {
        jsonUrl: "http://esotericsoftware.com/files/examples/4.0/spineboy/export/spineboy-pro.json",
        atlasUrl: "http://esotericsoftware.com/files/examples/4.0/spineboy/export/spineboy.atlas",
        animation:"walk",
        skin: "default",
        showControls: false,
    };
    return new spine.SpinePlayer('container', config);
}

export default SpineInit;