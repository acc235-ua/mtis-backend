package conexionDB;

import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Connection;

public class Conexion {
	
	//jdbc:mysql://[host]:[puerto]/[nombreBaseDatos]
	private static final String url = "jdbc:mysql://localhost:3307/mtis-grupal";
	
	private static final String controller = "com.mysql.cj.jdbc.Driver";
	
	//--------------
	private static final String user = "root";
	
	private static final String password = "contrasenamysql2025";
	//--------------
	private Connection conexion = null;
	
	public Connection creaConexion(){
		
		try{
			Class.forName(controller); //carga la clase indicada, (según pone en stack overflow jeje)
			conexion = DriverManager.getConnection(url,user,password);
			
			
		}catch(SQLException ex){
			System.out.println("Connection failure: " + ex.toString());
			
			return null;
		}catch(ClassNotFoundException ex){
			System.out.println("Class failure: " + ex.toString());
			return null;
		}
		return conexion;
	}
	
	
	public boolean cerrarConexion(){
		
		try{
			
			if( conexion != null ){	
				conexion.close();
			}
				//System.out.println("Connection close");
			}catch( SQLException ex){
				System.out.println("Disconnection failure: " + ex.toString());
				return false;
			}
		return true;
	}
	
}
