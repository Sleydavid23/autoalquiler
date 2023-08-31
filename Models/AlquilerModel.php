<?php
class AlquilerModel extends Query
{
    public function __construct()
    {
        parent::__construct();
    }
    public function getAlquiler()
    {
        $sql = "SELECT a.*, c.id AS id_cli, c.nombre, v.id AS id_veh, v.placa, v.id_tipo, v.modelo, d.id AS id_doc, d.documento, t.id AS id_tipo, t.tipo FROM alquiler a INNER JOIN clientes c ON c.id = a.id_cliente INNER JOIN vehiculos v ON v.id = a.id_vehiculo INNER JOIN documentos d ON d.id = a.id_doc INNER JOIN tipos t ON t.id = v.id_tipo";
        $data = $this->selectAll($sql);
        return $data;
    }
    public function getDoc()
    {
        $sql = "SELECT * FROM documentos WHERE estado = 1";
        $existe = $this->selectAll($sql);
        return $existe;
    }
    public function getVehiculos()
    {
        $sql = "SELECT v.id, v.placa, v.id_tipo, v.id_marca, v.estado, t.id, t.tipo, m.id, m.marca FROM vehiculos v INNER JOIN tipos t ON t.id = v.id_tipo INNER JOIN marcas m ON m.id = v.id_marca WHERE v.estado = 1";
        $existe = $this->selectAll($sql);
        return $existe;
    }
    public function getEmpresa()
    {
        $sql = "SELECT * FROM configuracion";
        $data = $this->select($sql);
        return $data;
    }
    public function registrarAlquiler(int $id_cli, int $id_veh, int $num_dias, string $precio, string $abono,
    string $f_prestamo, string $hora, string $f_devolucion, int $id_doc, string $obs)
    {
        $verficar = "SELECT * FROM alquiler WHERE id_cliente = $id_cli AND id_vehiculo = $id_veh AND id_doc = $id_doc AND estado = 1";
        $existe = $this->select($verficar);
        if (empty($existe)) {
            $sql = "INSERT INTO alquiler(id_cliente, id_vehiculo, num_dias, precio_dia, abono, fecha_prestamo, hora, fecha_devolucion, id_doc, observacion) VALUES (?,?,?,?,?,?,?,?,?,?)";
            $datos = array($id_cli, $id_veh, $num_dias, $precio, $abono, $f_prestamo, $hora, $f_devolucion, $id_doc, $obs);
            $data = $this->insertar($sql, $datos);
            if ($data > 0) {
                $res = $data;
            } else {
                $res = "error";
            }
        } else {
            $res = "existe";
        }
        return $res;
    }
    public function actualizarVehiculo(int $estado, int $id)
    {
        $sql = "UPDATE vehiculos SET estado = ? WHERE id = ?";
        $datos = array($estado, $id);
        $data = $this->save($sql, $datos);
        if ($data == 1) {
            $res = 'ok';
        }else{
            $res = 'error';
        }
        return $res;
    }
    public function procesarEntrega(int $estado, int $id)
    {
        $sql = "UPDATE alquiler SET estado = ? WHERE id = ?";
        $datos = array($estado, $id);
        $data = $this->save($sql, $datos);
        if ($data == 1) {
            $res = 'ok';
        } else {
            $res = 'error';
        }
        return $res;
    }
    public function verPrestamo(int $id)
    {
        $sql = "SELECT a.*, c.id AS id_cli, c.dni, c.nombre, c.telefono, c.direccion, v.id AS id_veh, v.placa, v.id_tipo, v.modelo, d.id AS id_doc, d.documento, t.id AS id_tipo, t.tipo FROM alquiler a INNER JOIN clientes c ON c.id = a.id_cliente INNER JOIN vehiculos v ON v.id = a.id_vehiculo INNER JOIN documentos d ON d.id = a.id_doc INNER JOIN tipos t ON t.id = v.id_tipo WHERE a.id = $id";
        $existe = $this->select($sql);
        return $existe;
    }
}
