;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="a9690590-22a6-b339-0a34-5759e254af19")}catch(e){}}();
module.exports=[99314,e=>{"use strict";var i=e.i(522734),r=e.i(843170);async function a(){for(let e of["/etc/machine-id","/var/lib/dbus/machine-id"])try{return(await i.promises.readFile(e,{encoding:"utf8"})).trim()}catch(e){r.diag.debug(`error reading machine id: ${e}`)}}e.s(["getMachineId",()=>a])}];

//# debugId=a9690590-22a6-b339-0a34-5759e254af19
//# sourceMappingURL=680c9_build_esm_detectors_platform_node_machine-id_getMachineId-linux_1f1fabee.js.map