
/**
 * ClienteSkeleton.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis2 version: 1.6.3  Built on : Jun 27, 2015 (11:17:49 BST)
 */
    package org.example.www.cliente;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import conexionDB.Conexion;

/**
     *  ClienteSkeleton java skeleton for the axisService
     */
    public class ClienteSkeleton{
        
    
                 public org.example.www.cliente.CrearClienteResponse crearCliente 
                 (org.example.www.cliente.CrearCliente crearCliente){
              	 
                	 //Cliente cliente = new Cliente();
                	 
                	 
                	 org.example.www.cliente.CrearClienteResponse respuesta = new org.example.www.cliente.CrearClienteResponse();
                	 
                	 respuesta.setOut(false);
                	 
             	    try {
             	        Conexion con = new Conexion(); 
             	        Connection conexion = con.creaConexion();
             	     //1º compruebo si existe cliente con el mismo dni registrado
             	        String query = String.format("SELECT * FROM usuario WHERE DNI = '%s'", crearCliente.getIn().getDni());
             	        
             	        PreparedStatement pstmt = conexion.prepareStatement(query);
             	       ResultSet rs = pstmt.executeQuery();
             	       
             	       //ya existe
             	       if( rs.next()){
             	    	  System.out.println("Ya existe un cliente con este dni, inicie sesión");
               	    	  return respuesta;
             	    	   
             	       }
             	       
             	       //2º crear cliente en la BD
             	       String dni = crearCliente.getIn().getDni();
             	       String nombre = crearCliente.getIn().getNombre();
             	       String apellidos = crearCliente.getIn().getApellidos();
             	       String correo = crearCliente.getIn().getCorreo();
             	       int numero = crearCliente.getIn().getTelefono();
             	      String queryDos = String.format("INSERT INTO usuario (DNI, Nombre, Apellidos, Telefono, Correo)"
             	      		+ "VALUES ( '%S','%S','%S','%d','%s')",dni,nombre,apellidos,numero,correo );
             	      
             	      pstmt = conexion.prepareStatement(queryDos);
             	      pstmt.execute();
             	      
             	      respuesta.setOut(true);
             	        
             	        return respuesta;
             	    }catch(Exception ex){
             	    	System.out.println("ERROR AL CREAR CLIENTE: "+ ex);
             	    	return respuesta;
             	    }
                	  
              
        }
     
         
  
                 public org.example.www.cliente.ValidarClienteResponse validarCliente
                  (org.example.www.cliente.ValidarCliente validarCliente){
                	org.example.www.cliente.ValidarClienteResponse respuesta = new org.example.www.cliente.ValidarClienteResponse();
         	    	respuesta.setOut(false);
                	try {
                	    	//devolver false ---> cliente inválido
                		    //devolver true ---> cliente válido
                 	        Conexion con = new Conexion(); 
                 	        Connection conexion = con.creaConexion();
                 	        
                 	        String dni = validarCliente.getDni();
                 	        
                 	        
                 	        //Primero compruebo si es un usuario registrado en bd y luego si está en la lista de fraudes
                 	        
                 	       String queryUsers = String.format("SELECT * FROM  usuario WHERE DNI = '%s'",dni);
                 	       PreparedStatement pstmt = conexion.prepareStatement(queryUsers);
                	       ResultSet rs = pstmt.executeQuery();
                 	       	if(! rs.next()){
                   	    	 
                    	    	 return respuesta;
                 	       	}
                 	        String queryFraude = String.format("SELECT * FROM  Fraude WHERE DNI_Usuario = '%s'",dni);
                 	        
                 	       pstmt = conexion.prepareStatement(queryFraude);
                 	       rs = pstmt.executeQuery();
                 	      
                 	       
                 	      
                 	       if( rs.next()){
                 	    	 
                   	    	  return respuesta;
                 	    	   
                 	       }else{
                 	    	   respuesta.setOut(true);
                 	    	   return respuesta;
                 	       }
                 	        
                 	        
                	}catch(Exception ex){
                	    	System.out.println("ERROR AL VALIDAR CLIENTE: "+ ex);
                 	    	return respuesta;
                	    	
                	}
                	 
                	 
                
        }
         //SIN TERMINAR !! FALTA POR RELLENAR EL CAMPO ID_INFORME EN LA BD PERO ESA PARTE NO ME CORRESPONDE Y NO SE DE DONDE SE SACA ESO
         //el que tenga esa parte que mire esto porfi 
        //( importante también borrar este comentario antes de entregarlo jaja)
	   public org.example.www.cliente.MarcarComoFraudeResponse marcarComoFraude
                  (org.example.www.cliente.MarcarComoFraude marcarComoFraude ){
		   
		   String dni = marcarComoFraude.getDni();
		   org.example.www.cliente.MarcarComoFraudeResponse respuesta = new org.example.www.cliente.MarcarComoFraudeResponse();
		   respuesta.setRespuesta(false);
		   try{
			   
			   //1º Compruebo si existe el usuario
			   Conexion con = new Conexion(); 
    	       Connection conexion = con.creaConexion();
    	        String queryUsers = String.format("SELECT * FROM  usuario WHERE DNI = '%s'",dni);
      	       PreparedStatement pstmt = conexion.prepareStatement(queryUsers);
     	       ResultSet rs = pstmt.executeQuery();
      	       	if(! rs.next()){ // Si no existe lo indico
      	       		System.out.println("NO EXISTE UN CLIENTE CON ESTE DNI");
      	       		return respuesta;
      	       	}else{
      	       		//INSERT EN TABLA DE FRAUDES
      	       		
      	       	String queryDos = String.format("INSERT INTO Fraude (DNI_Usuario, Es_fraude,ID_Informe) VALUES ('%s',1,1)", dni);
      	       	 pstmt = conexion.prepareStatement(queryDos);
      	       	
      	       	 pstmt.execute();
      	       		
      	       	}
			   
      	       	return respuesta;
		   }catch(Exception ex){
			   System.out.println("ERROR AL MARCAR CLIENTE COMO FRAUDE: "+ex);
			   return respuesta;
			   
		   }
              
        }
     
    }