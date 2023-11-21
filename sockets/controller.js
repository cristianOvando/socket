const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente desconectado', socket.id);
    });

    // Escucha el evento 'nuevos-datos' desde la API REST
    socket.on('nuevos-datos', (nuevosDatos) => {
        console.log('Nuevos datos recibidos:', nuevosDatos);

        // Reenvía los nuevos datos a todos los clientes conectados
        socket.broadcast.emit('nuevos-datos', nuevosDatos);
    });
};

module.exports = {
    socketController
}

