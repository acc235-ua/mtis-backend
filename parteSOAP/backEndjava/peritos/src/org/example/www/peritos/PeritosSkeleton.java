
/**
 * PeritosSkeleton.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis2 version: 1.6.3  Built on : Jun 27, 2015 (11:17:49 BST)
 */
    package org.example.www.peritos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import conexionDB.Conexion;

/**
     *  PeritosSkeleton java skeleton for the axisService
     */
    public class PeritosSkeleton{
        
         
   
        
                 public org.example.www.peritos.CrearPeritoResponse crearPerito
                  (
                  org.example.www.peritos.CrearPerito crearPerito
                  )
            {
                try{
                	
                	String dni = crearPerito.getIn().getDni();
                	String nombre = crearPerito.getIn().getNombre();
                	String apellidos = crearPerito.getIn().getApellidos();
                	int numColegiado = crearPerito.getIn().getNumeroColegiado();
                	
                	Conexion con = new Conexion();
           		 	Connection conectado = con.creaConexion();
           		 	
           		 		String query = String.format("INSERT INTO Perito (DNI,Nombre,Apellidos,Num_colegiado) "
           		 		+ "VALUES ('%s' ,'%s','%s','%d')", dni, nombre, apellidos , numColegiado);	
           		 		PreparedStatement pstmt = conectado.prepareStatement(query);
     	        
     	        
        		 	pstmt.execute();
        		 	
        		 	String queryDos = String.format("INSERT INTO disponibilidadPeritos ( DNI_Perito, disponible ) VALUES"
        		 			+ "('%s' ,1)", dni);
        		 	
        		 	pstmt = conectado.prepareStatement(queryDos);
        		 	pstmt.execute();
        		 	
        		 	org.example.www.peritos.CrearPeritoResponse respuesta = new org.example.www.peritos.CrearPeritoResponse();
                	respuesta.setOut(true);
                	return respuesta;
                }catch(Exception ex){
                	System.out.println("ERROR: error creando un perito: " + ex);
                	org.example.www.peritos.CrearPeritoResponse respuesta = new org.example.www.peritos.CrearPeritoResponse();
                	respuesta.setOut(false);
                	return respuesta;
                }
           		 	
                	
                	
        }
     
         
    
     
        public org.example.www.peritos.LiberarPeritoResponse liberarPerito
        (org.example.www.peritos.LiberarPerito liberarPerito){
        	
        	try{
        		Conexion con = new Conexion();
       		 	Connection conectado = con.creaConexion();
        		String dni = liberarPerito.getDni();
       		 	String query = String.format("UPDATE disponibilidadPeritos SET disponible = 1 WHERE DNI_Perito = ('%s')", dni);
           
       		 	PreparedStatement pstmt = conectado.prepareStatement(query);
	        
	        
       		 	pstmt.execute();

       		 	org.example.www.peritos.LiberarPeritoResponse respuesta = new  org.example.www.peritos.LiberarPeritoResponse();
       		 	respuesta.setOut(true);
       		 	return respuesta;
        		
        	}catch(Exception ex){
        		System.out.println("Ha ocurrido un error al liberar: "+ex.getMessage());
        		org.example.www.peritos.LiberarPeritoResponse respuesta = new  org.example.www.peritos.LiberarPeritoResponse();
          		 respuesta.setOut(false);
          		 return respuesta;
        	}
        }
                 
        public org.example.www.peritos.AsignaPeritoResponse asignaPerito
        (org.example.www.peritos.AsignaPerito asignaPerito){
                	
                	
                	org.example.www.peritos.AsignaPeritoResponse respuesta = new org.example.www.peritos.AsignaPeritoResponse();
                	 
                	boolean disponible = false; 
                	String dniperito = "";
                	Perito perito = new Perito();
                	try{
                		Conexion con = new Conexion();
                		 Connection conectado = con.creaConexion();
                		//PASOS:
                		 
                		 //1º BUSCO UN PERITO DISPONIBLE EN LA BD 
                        String query = "SELECT DNI_Perito FROM disponibilidadPeritos WHERE disponible = TRUE LIMIT 1";
                        
                        PreparedStatement pstmt = conectado.prepareStatement(query);
            	        
            	        
            	        ResultSet rs = pstmt.executeQuery();
            	        
            	        // Si existe al menos un resultado seguimos, si no salimos
            	        if (rs.next()) {
            	        	
            	        	//2º OBTENER TODOS LOS DATOS DEL PERITO EN SU TABLA
            	        	disponible = true;
            	        	
            	        	dniperito = rs.getString("DNI_Perito");
            	        	
            	        	String queryDos = String.format("SELECT * from Perito WHERE dni= '%s'",dniperito);
            	        	pstmt =  conectado.prepareStatement(queryDos);
                	        ResultSet rsDos = pstmt.executeQuery();
                	        
                	        if(rsDos.next()){
               	        	 

                	        	perito.setDni(dniperito);
                	        	String nombrePerito =  rsDos.getString("Nombre");
                	        	String apellidosPerito = rsDos.getString("Apellidos");
                	        	int numPerito = rsDos.getInt("Num_Colegiado");
                	        	
                	        	perito.setNombre(nombrePerito);
                	        	perito.setApellidos(apellidosPerito);
                	        	perito.setNumeroColegiado(numPerito);
                	        	
                	        	
                	        	//respuesta.setPerito(perito);
                	        	//respuesta.setRespuesta(disponible);
                	        	
                	        	
                	        	//3 CREO EL CASO CON EL PERITO ASIGNADO
                 	        	LocalDateTime fechaInicioCaso = LocalDateTime.now();
                	        	
                	        	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
                	        	String fechaFormateada = fechaInicioCaso.format(formatter);

                	        	String queryCasos = String.format("INSERT INTO casosPeritos (Fecha_Inicio,DNI_Perito) VALUES ('%s' , '%s') ",fechaFormateada, dniperito);
                	        	PreparedStatement pstmtcasos = conectado.prepareStatement(queryCasos, Statement.RETURN_GENERATED_KEYS);

                	       
                	        	pstmtcasos.execute();
                	        	
                	        	ResultSet rsCasos = pstmtcasos.getGeneratedKeys();
                	        	
                	        	int idCaso = -1;
                	        	if (rsCasos.next()) {
                	        		
                	        		
                	        	    idCaso = rsCasos.getInt(1); // ID generado
                	        	    
                	        	}else{
                	        		System.out.println("ERROR CREANDO CASO IMPOSIBLE SEGUIR");
                	        		return null;
                	        		
                	        	}
                	        	
                	        	
                	        
                	        	//int idCaso = asignaPerito.getNumCaso();
                	        	 //String queryTres = String.format("INSERT INTO casosasignados (idcaso,dniPerito) VALUES ( '%d','%s')" , idCaso,dniperito);
                	        	 //pstmt = conectado.prepareStatement(queryTres);
                	        	 //pstmt.execute();
                	        	 
                	        	 //4º MARCAR COMO OCUPADO AL PERITO
                	        	 String queryCuatro = String.format( "UPDATE disponibilidadPeritos SET disponible = False "
                	        	 		+ "WHERE DNI_Perito = '%s'", dniperito);
                	        	 
                	        	 pstmt = conectado.prepareStatement(queryCuatro);
                	        	 pstmt.execute();
                          			
                	        	 System.out.println("CASO CON ID:"+idCaso+" asignado al perito con dni: "+dniperito);

                	        	 //cerrar
                	        	 pstmt.close();
                	        	 rs.close();
                	        	 rsDos.close();
                	        	 conectado.close();
                	        	 
                	        	 
                	        	  respuesta.setPerito(perito);
                  	        	respuesta.setRespuesta(disponible);
                  	        	respuesta.setIdCaso(idCaso);
                	        }else{
                	        	System.out.println("Error grave de incosistencia en la BD, revisar las tablas peritos y disponibilidad");
                	        	return null;
                	        }

                	      
            	        	
            	        }else{
            	        	disponible = false;
            	        	perito.setDni("00000000A");
            	        	perito.setNombre("Sin Peritos");
            	        	perito.setApellidos("Sin peritos");
            	        	perito.setNumeroColegiado(0);
            	        	
            	        	respuesta.setIdCaso(0);
            	        	respuesta.setPerito(perito);
            	        	respuesta.setRespuesta(disponible);
            	        	System.out.println("NO HAY NINGÚN PERITO DISPONIBLE PARA ASIGNAR AL CASO, SERÁ RECHAZADO");
            	        	
            	        }
                	}catch( Exception ex){
                		System.out.println("Ha ocurrido un error: "+ex.getMessage());
                		return null;
                	}
                
                     
                	return respuesta;
                       
                }        
                 
     
    }