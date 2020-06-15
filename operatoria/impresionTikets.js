/* Esta funcion recibe todos los paramentros necesarion para realizar el documento en PDF, la lista incluye los datos del remitente, destinario y del paquete */

function modelCreator (dnombre, dcalle, daltura, dpiso, ddepto, dlocalidad, dprovincia, dcp, dtelefono, demail, base64qr, codPaquete, rnombre, rcalle, raltura, rpiso, rdepto, rlocalidad, rprovincia, rtelefono, rcp, remail) {
    console.log("estamos generando el pdf")
    var doc = new jsPDF();

        //recuadro
        doc.line(5, 10, 150, 10);
        doc.line(5, 10, 5, 65);
        doc.line(5, 65, 150, 65);
        doc.line(150, 10, 150, 65);

        //destinatario
        doc.setFontSize(11);
        doc.text("Destinatario:", 10, 24);

        //datos
        doc.setFontSize(7)
        doc.text("Nombre: " + dnombre, 10, 28);
        doc.text("Direccion: " + dcalle + " " + daltura + " " + "Depto: " + dpiso + " " + ddepto, 10, 31);
        doc.text("Loc: " + dlocalidad, 10, 34);
        doc.text("Prov: " + dprovincia, 40, 34);
        doc.text("Telefono: " + dtelefono, 30, 37);
        doc.text("CP: " + dcp, 10, 37);
        doc.text("Email: " + demail, 10, 40);

        //remitente
        doc.setFontSize(11);
        doc.text("Remitente", 10, 45);

        //datos
        doc.setFontSize(7);
        doc.text("Nombre: " + rnombre, 10, 49);
        doc.text("Direccion: " + rcalle + " " + raltura + " " + "Depto: " + rpiso + " " + rdepto, 10, 52);
        doc.text("Loc: " + rlocalidad, 10, 55);
        doc.text("Prov: " + rprovincia, 40, 55);
        doc.text("CP: " + rcp, 10, 58);
        doc.text("Telefono: " + rtelefono, 40, 58);
        doc.text("Email: " + remail, 10, 61);

        doc.addImage(base64qr, "JPEG", 75, 20, 32, 32);
        doc.setFontSize(13);
        doc.text("AAA0000004", 78, 58);

        doc.addImage(base64qr, "JPEG", 113, 20, 32, 32);
        doc.setFontSize(13);
        doc.text("AAA0000004", 116, 58);

        doc.save("comprobante_paquete_" + codPaquete +".pdf");



       /*  doc.addImage(base64qr, "JPEG", 75, 20, 32, 32);
        doc.setFontSize(13);
        doc.text("AAA0000004", 78, 58);

        doc.addImage(base64qr, "JPEG", 113, 20, 32, 32);
        doc.setFontSize(13);
        doc.text("AAA0000004", 116, 58);

        doc.addImage(base64logocp, "JPEG", 113, 10, 32, 9); */

        //texto para informacion de usaurio
        //titulo
        //doc.setFontSize(23);
        //doc.text("Dislog", 10, 18);
        /* doc.addImage(base64pre, "PNG", 7, 11, 60, 8); */

}