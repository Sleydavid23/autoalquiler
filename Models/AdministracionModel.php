<?php
class AdministracionModel extends Query
{
    public function __construct()
    {
        parent::__construct();
    }
    public function getEmpresa()
    {
        $sql = "SELECT * FROM configuracion";
        $data = $this->select($sql);
        return $data;
    }
    public function getDatos(string $table)
    {
        $sql = "SELECT COUNT(*) AS total FROM $table WHERE estado = 1";
        $data = $this->select($sql);
        return $data;
    }
    public function modificar(string $ruc, string $nombre, string $tel, string $correo, string $dir, string $mensaje, string $img, int $moneda, int $id)
    {
        $sql = "UPDATE configuracion SET ruc=?, nombre = ?, telefono =?, correo=?, direccion=?, mensaje=?, logo = ?, moneda=? WHERE id=?";
            $datos = array($ruc, $nombre, $tel, $correo, $dir, $mensaje, $img, $moneda, $id);
            $data = $this->save($sql, $datos);
            if ($data == 1) {
                $res = "ok";
            } else {
                $res = "error";
            }
        return $res;
    }
    
    //Monedas
    public function registrarMoneda(string $simbolo, string $nom)
    {
        $sql = "INSERT INTO moneda (simbolo, nombre) VALUES (?,?)";
        $datos = array($simbolo, $nom);
        $data = $this->save($sql, $datos);
        if ($data == 1) {
            $res = "ok";
        } else {
            $res = "error";
        }
        return $res;
    }
    public function getMonedas(int $estado)
    {
        $sql = "SELECT * FROM moneda WHERE estado = $estado";
        $data = $this->selectAll($sql);
        return $data;
    }
    public function modificarMoneda(string $simbolo, string $nombre, int $id)
    {
        $sql = "UPDATE moneda SET simbolo = ?, nombre = ? WHERE id = ?";
        $datos = array($simbolo, $nombre, $id);
        $data = $this->save($sql, $datos);
        if ($data == 1) {
            $res = "modificado";
        } else {
            $res = "error";
        }
        return $res;
    }
    public function editarMoneda(int $id)
    {
        $sql = "SELECT * FROM moneda WHERE id = $id";
        $data = $this->select($sql);
        return $data;
    }
    public function accionMoneda(int $estado, int $id)
    {
        $sql = "UPDATE moneda SET estado = ? WHERE id = ?";
        $datos = array($estado, $id);
        $data = $this->save($sql, $datos);
        return $data;
    }
    public function getEmpresaMoneda()
    {
        $sql = "SELECT m.id, m.simbolo, c.moneda FROM moneda m INNER JOIN configuracion c ON m.id = c.moneda";
        $data = $this->select($sql);
        return $data;
    }
}
