
/**
 * InformeSkeleton.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis2 version: 1.6.3  Built on : Jun 27, 2015 (11:17:49 BST)
 */
    package org.example.www.informe;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import conexionDB.Conexion;


    public class InformeSkeleton{
        
           public org.example.www.informe.GenerarInformeResponse generarInforme
              (org.example.www.informe.GenerarInforme generarInforme){
              int idcaso =	 generarInforme.getIdCaso();
              try{
            	 Conexion con = new Conexion();
         		 Connection conectado = con.creaConexion();
         		 
         		 
         		 
         		 //compruebo si ya existe el caso en la BD,si es así lo indico
         		 String queryCero = String.format("SELECT * FROM informesPeritos WHERE Caso = '%d' ",idcaso);
         		 PreparedStatement pstmt = conectado.prepareStatement(queryCero);
         		 ResultSet rscero = pstmt.executeQuery();
         		 
         		 if(rscero.next()){//si entra no es null, por tanto ya existe un informe de este caso
         			 
         			 Informe informeMalo = new Informe();
         			 informeMalo.setMensaje("Ya existe un informe previo de este caso");
         			 PeritosInforme  perito = new PeritosInforme();
         			 perito.setDni("00000000A");
    	        	 perito.setNombre("error");
    	        	 perito.setApellidos("error");
    	        	 perito.setNumeroColegiado(0);
    	        	 org.example.www.informe.GenerarInformeResponse respuesta = new org.example.www.informe.GenerarInformeResponse();
    	        	 
    	        	 informeMalo.setPeritoAsociado(perito);
    	        	 respuesta.setInforme(informeMalo);
    	        	 return respuesta;
         			 
         		 }
         		 
                 String query = String.format("SELECT DNI_Perito FROM casosPeritos WHERE ID = '%d' ",idcaso);
                
                 pstmt = conectado.prepareStatement(query);
    	        
    	        
    	         ResultSet rs = pstmt.executeQuery();
    	      
    	         String dni = "";
    	         if (rs.next()) {
    	        	 dni = rs.getString("DNI_Perito");
    	        	
    	        	
    	         }else{
    	        	 System.out.println("ERROR AL LEER casos");
    	        	 return null;
    	         }
    	       
    	         String queryDos = String.format("SELECT * FROM Perito WHERE DNI = '%s'",dni);
    	         pstmt = conectado.prepareStatement(queryDos);
    	         rs = pstmt.executeQuery();
    	         PeritosInforme  perito = new PeritosInforme();
    	         if ( rs.next()){
    	        	 int numerin = rs.getInt("Num_colegiado");
    	        	 perito.setDni(dni);
    	        	 perito.setNombre(rs.getString("Nombre"));
    	        	 perito.setApellidos(rs.getString("Apellidos"));
    	        	 perito.setNumeroColegiado(numerin);
    	         }else{
    	        	 System.out.println("ERROR AL LEER peritos");
    	        	 return null;
    	         }
    	         
    	         
                 Informe informe = new Informe();
                 ;
                 informe.setPeritoAsociado(perito);
                 String mensaje = "";
                 if ( generarInforme.getResultado() == true ){
                	  mensaje= "Este es un informe genérico y autogenerado para informarle de la finalización de su caso "
                	  		+ "de forma positiva para su persona"
                     		+ ". Recibirá un informe detallado redactado por el perito asociado encargado de su caso.";
                 }else{
                 	  
                	  mensaje= "Este es un informe genérico y autogenerado para informarle de la finalización de su caso "
                  	  		+ "de forma negativa, puede reclamar si lo desea."
                       		+ ". Recibirá un informe detallado redactado por el perito asociado encargado de su caso.";
                 }
               
                informe.setMensaje(mensaje);
                
                 org.example.www.informe.GenerarInformeResponse respuesta = new org.example.www.informe.GenerarInformeResponse();
                 
                 
                 String queryTres = String.format("INSERT INTO informesPeritos (Caso,Mensaje) VALUES ( '%d' , '%s' )",idcaso, mensaje);
             	pstmt = conectado.prepareStatement(queryTres);
    		 	pstmt.execute();
                
                 respuesta.setInforme(informe);
                return respuesta;
    	     }catch(Exception ex){
    	    	 System.out.println("ERROR EN GENERAR INFORME: "+ ex );
    	    	 //org.example.www.informe.GenerarInformeResponse respuesta = new org.example.www.informe.GenerarInformeResponse();
    	    	 return null;
    	     }
    	    }
        
     
    }
    