<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoge los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $direccion = $_POST['direccion'];
    $mensaje = $_POST['mensaje'];

    // Email al que se enviará el formulario
    $destinatario = 'javix33@hotmail.com';

    // Asunto del correo
    $asunto = 'Nuevo mensaje del formulario';

    // Construye el cuerpo del mensaje
    $cuerpoMensaje = "Nombre: $nombre\n";
    $cuerpoMensaje .= "Email: $email\n";
    $cuerpoMensaje .= "Teléfono: $telefono\n";
    $cuerpoMensaje .= "Dirección: $direccion\n";
    $cuerpoMensaje .= "Mensaje:\n$mensaje";

    // Cabeceras del correo
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envía el correo
    if (mail($destinatario, $asunto, $cuerpoMensaje, $headers)) {
        echo '<p>¡El mensaje se ha enviado correctamente!</p>';
    } else {
        echo '<p>Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.</p>';
    }
}
?>
