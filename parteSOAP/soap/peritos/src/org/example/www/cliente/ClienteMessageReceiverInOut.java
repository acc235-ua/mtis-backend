
/**
 * ClienteMessageReceiverInOut.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis2 version: 1.6.3  Built on : Jun 27, 2015 (11:17:49 BST)
 */
        package org.example.www.cliente;

        /**
        *  ClienteMessageReceiverInOut message receiver
        */

        public class ClienteMessageReceiverInOut extends org.apache.axis2.receivers.AbstractInOutMessageReceiver{


        public void invokeBusinessLogic(org.apache.axis2.context.MessageContext msgContext, org.apache.axis2.context.MessageContext newMsgContext)
        throws org.apache.axis2.AxisFault{

        try {

        // get the implementation class for the Web Service
        Object obj = getTheImplementationObject(msgContext);

        ClienteSkeleton skel = (ClienteSkeleton)obj;
        //Out Envelop
        org.apache.axiom.soap.SOAPEnvelope envelope = null;
        //Find the axisOperation that has been set by the Dispatch phase.
        org.apache.axis2.description.AxisOperation op = msgContext.getOperationContext().getAxisOperation();
        if (op == null) {
        throw new org.apache.axis2.AxisFault("Operation is not located, if this is doclit style the SOAP-ACTION should specified via the SOAP Action to use the RawXMLProvider");
        }

        java.lang.String methodName;
        if((op.getName() != null) && ((methodName = org.apache.axis2.util.JavaUtils.xmlNameToJavaIdentifier(op.getName().getLocalPart())) != null)){


        

            if("marcarComoFraude".equals(methodName)){
                
                org.example.www.cliente.MarcarComoFraudeResponse marcarComoFraudeResponse13 = null;
	                        org.example.www.cliente.MarcarComoFraude wrappedParam =
                                                             (org.example.www.cliente.MarcarComoFraude)fromOM(
                                    msgContext.getEnvelope().getBody().getFirstElement(),
                                    org.example.www.cliente.MarcarComoFraude.class,
                                    getEnvelopeNamespaces(msgContext.getEnvelope()));
                                                
                                               marcarComoFraudeResponse13 =
                                                   
                                                   
                                                         skel.marcarComoFraude(wrappedParam)
                                                    ;
                                            
                                        envelope = toEnvelope(getSOAPFactory(msgContext), marcarComoFraudeResponse13, false, new javax.xml.namespace.QName("http://www.example.org/cliente/",
                                                    "marcarComoFraude"));
                                    } else 

            if("crearCliente".equals(methodName)){
                
                org.example.www.cliente.CrearClienteResponse crearClienteResponse15 = null;
	                        org.example.www.cliente.CrearCliente wrappedParam =
                                                             (org.example.www.cliente.CrearCliente)fromOM(
                                    msgContext.getEnvelope().getBody().getFirstElement(),
                                    org.example.www.cliente.CrearCliente.class,
                                    getEnvelopeNamespaces(msgContext.getEnvelope()));
                                                
                                               crearClienteResponse15 =
                                                   
                                                   
                                                         skel.crearCliente(wrappedParam)
                                                    ;
                                            
                                        envelope = toEnvelope(getSOAPFactory(msgContext), crearClienteResponse15, false, new javax.xml.namespace.QName("http://www.example.org/cliente/",
                                                    "crearCliente"));
                                    } else 

            if("validarCliente".equals(methodName)){
                
                org.example.www.cliente.ValidarClienteResponse validarClienteResponse17 = null;
	                        org.example.www.cliente.ValidarCliente wrappedParam =
                                                             (org.example.www.cliente.ValidarCliente)fromOM(
                                    msgContext.getEnvelope().getBody().getFirstElement(),
                                    org.example.www.cliente.ValidarCliente.class,
                                    getEnvelopeNamespaces(msgContext.getEnvelope()));
                                                
                                               validarClienteResponse17 =
                                                   
                                                   
                                                         skel.validarCliente(wrappedParam)
                                                    ;
                                            
                                        envelope = toEnvelope(getSOAPFactory(msgContext), validarClienteResponse17, false, new javax.xml.namespace.QName("http://www.example.org/cliente/",
                                                    "validarCliente"));
                                    
            } else {
              throw new java.lang.RuntimeException("method not found");
            }
        

        newMsgContext.setEnvelope(envelope);
        }
        }
        catch (java.lang.Exception e) {
        throw org.apache.axis2.AxisFault.makeFault(e);
        }
        }
        
        //
            private  org.apache.axiom.om.OMElement  toOM(org.example.www.cliente.MarcarComoFraude param, boolean optimizeContent)
            throws org.apache.axis2.AxisFault {

            
                        try{
                             return param.getOMElement(org.example.www.cliente.MarcarComoFraude.MY_QNAME,
                                          org.apache.axiom.om.OMAbstractFactory.getOMFactory());
                        } catch(org.apache.axis2.databinding.ADBException e){
                            throw org.apache.axis2.AxisFault.makeFault(e);
                        }
                    

            }
        
            private  org.apache.axiom.om.OMElement  toOM(org.example.www.cliente.MarcarComoFraudeResponse param, boolean optimizeContent)
            throws org.apache.axis2.AxisFault {

            
                        try{
                             return param.getOMElement(org.example.www.cliente.MarcarComoFraudeResponse.MY_QNAME,
                                          org.apache.axiom.om.OMAbstractFactory.getOMFactory());
                        } catch(org.apache.axis2.databinding.ADBException e){
                            throw org.apache.axis2.AxisFault.makeFault(e);
                        }
                    

            }
        
            private  org.apache.axiom.om.OMElement  toOM(org.example.www.cliente.CrearCliente param, boolean optimizeContent)
            throws org.apache.axis2.AxisFault {

            
                        try{
                             return param.getOMElement(org.example.www.cliente.CrearCliente.MY_QNAME,
                                          org.apache.axiom.om.OMAbstractFactory.getOMFactory());
                        } catch(org.apache.axis2.databinding.ADBException e){
                            throw org.apache.axis2.AxisFault.makeFault(e);
                        }
                    

            }
        
            private  org.apache.axiom.om.OMElement  toOM(org.example.www.cliente.CrearClienteResponse param, boolean optimizeContent)
            throws org.apache.axis2.AxisFault {

            
                        try{
                             return param.getOMElement(org.example.www.cliente.CrearClienteResponse.MY_QNAME,
                                          org.apache.axiom.om.OMAbstractFactory.getOMFactory());
                        } catch(org.apache.axis2.databinding.ADBException e){
                            throw org.apache.axis2.AxisFault.makeFault(e);
                        }
                    

            }
        
            private  org.apache.axiom.om.OMElement  toOM(org.example.www.cliente.ValidarCliente param, boolean optimizeContent)
            throws org.apache.axis2.AxisFault {

            
                        try{
                             return param.getOMElement(org.example.www.cliente.ValidarCliente.MY_QNAME,
                                          org.apache.axiom.om.OMAbstractFactory.getOMFactory());
                        } catch(org.apache.axis2.databinding.ADBException e){
                            throw org.apache.axis2.AxisFault.makeFault(e);
                        }
                    

            }
        
            private  org.apache.axiom.om.OMElement  toOM(org.example.www.cliente.ValidarClienteResponse param, boolean optimizeContent)
            throws org.apache.axis2.AxisFault {

            
                        try{
                             return param.getOMElement(org.example.www.cliente.ValidarClienteResponse.MY_QNAME,
                                          org.apache.axiom.om.OMAbstractFactory.getOMFactory());
                        } catch(org.apache.axis2.databinding.ADBException e){
                            throw org.apache.axis2.AxisFault.makeFault(e);
                        }
                    

            }
        
                    private  org.apache.axiom.soap.SOAPEnvelope toEnvelope(org.apache.axiom.soap.SOAPFactory factory, org.example.www.cliente.MarcarComoFraudeResponse param, boolean optimizeContent, javax.xml.namespace.QName methodQName)
                        throws org.apache.axis2.AxisFault{
                      try{
                          org.apache.axiom.soap.SOAPEnvelope emptyEnvelope = factory.getDefaultEnvelope();
                           
                                    emptyEnvelope.getBody().addChild(param.getOMElement(org.example.www.cliente.MarcarComoFraudeResponse.MY_QNAME,factory));
                                

                         return emptyEnvelope;
                    } catch(org.apache.axis2.databinding.ADBException e){
                        throw org.apache.axis2.AxisFault.makeFault(e);
                    }
                    }
                    
                         private org.example.www.cliente.MarcarComoFraudeResponse wrapMarcarComoFraude(){
                                org.example.www.cliente.MarcarComoFraudeResponse wrappedElement = new org.example.www.cliente.MarcarComoFraudeResponse();
                                return wrappedElement;
                         }
                    
                    private  org.apache.axiom.soap.SOAPEnvelope toEnvelope(org.apache.axiom.soap.SOAPFactory factory, org.example.www.cliente.CrearClienteResponse param, boolean optimizeContent, javax.xml.namespace.QName methodQName)
                        throws org.apache.axis2.AxisFault{
                      try{
                          org.apache.axiom.soap.SOAPEnvelope emptyEnvelope = factory.getDefaultEnvelope();
                           
                                    emptyEnvelope.getBody().addChild(param.getOMElement(org.example.www.cliente.CrearClienteResponse.MY_QNAME,factory));
                                

                         return emptyEnvelope;
                    } catch(org.apache.axis2.databinding.ADBException e){
                        throw org.apache.axis2.AxisFault.makeFault(e);
                    }
                    }
                    
                         private org.example.www.cliente.CrearClienteResponse wrapcrearCliente(){
                                org.example.www.cliente.CrearClienteResponse wrappedElement = new org.example.www.cliente.CrearClienteResponse();
                                return wrappedElement;
                         }
                    
                    private  org.apache.axiom.soap.SOAPEnvelope toEnvelope(org.apache.axiom.soap.SOAPFactory factory, org.example.www.cliente.ValidarClienteResponse param, boolean optimizeContent, javax.xml.namespace.QName methodQName)
                        throws org.apache.axis2.AxisFault{
                      try{
                          org.apache.axiom.soap.SOAPEnvelope emptyEnvelope = factory.getDefaultEnvelope();
                           
                                    emptyEnvelope.getBody().addChild(param.getOMElement(org.example.www.cliente.ValidarClienteResponse.MY_QNAME,factory));
                                

                         return emptyEnvelope;
                    } catch(org.apache.axis2.databinding.ADBException e){
                        throw org.apache.axis2.AxisFault.makeFault(e);
                    }
                    }
                    
                         private org.example.www.cliente.ValidarClienteResponse wrapValidarCliente(){
                                org.example.www.cliente.ValidarClienteResponse wrappedElement = new org.example.www.cliente.ValidarClienteResponse();
                                return wrappedElement;
                         }
                    


        /**
        *  get the default envelope
        */
        private org.apache.axiom.soap.SOAPEnvelope toEnvelope(org.apache.axiom.soap.SOAPFactory factory){
        return factory.getDefaultEnvelope();
        }


        private  java.lang.Object fromOM(
        org.apache.axiom.om.OMElement param,
        java.lang.Class type,
        java.util.Map extraNamespaces) throws org.apache.axis2.AxisFault{

        try {
        
                if (org.example.www.cliente.CrearCliente.class.equals(type)){
                
                        return org.example.www.cliente.CrearCliente.Factory.parse(param.getXMLStreamReaderWithoutCaching());
                    

                }
            
                if (org.example.www.cliente.CrearClienteResponse.class.equals(type)){
                
                        return org.example.www.cliente.CrearClienteResponse.Factory.parse(param.getXMLStreamReaderWithoutCaching());
                    

                }
            
                if (org.example.www.cliente.MarcarComoFraude.class.equals(type)){
                
                        return org.example.www.cliente.MarcarComoFraude.Factory.parse(param.getXMLStreamReaderWithoutCaching());
                    

                }
            
                if (org.example.www.cliente.MarcarComoFraudeResponse.class.equals(type)){
                
                        return org.example.www.cliente.MarcarComoFraudeResponse.Factory.parse(param.getXMLStreamReaderWithoutCaching());
                    

                }
            
                if (org.example.www.cliente.ValidarCliente.class.equals(type)){
                
                        return org.example.www.cliente.ValidarCliente.Factory.parse(param.getXMLStreamReaderWithoutCaching());
                    

                }
            
                if (org.example.www.cliente.ValidarClienteResponse.class.equals(type)){
                
                        return org.example.www.cliente.ValidarClienteResponse.Factory.parse(param.getXMLStreamReaderWithoutCaching());
                    

                }
            
        } catch (java.lang.Exception e) {
        throw org.apache.axis2.AxisFault.makeFault(e);
        }
           return null;
        }



    

        /**
        *  A utility method that copies the namepaces from the SOAPEnvelope
        */
        private java.util.Map getEnvelopeNamespaces(org.apache.axiom.soap.SOAPEnvelope env){
        java.util.Map returnMap = new java.util.HashMap();
        java.util.Iterator namespaceIterator = env.getAllDeclaredNamespaces();
        while (namespaceIterator.hasNext()) {
        org.apache.axiom.om.OMNamespace ns = (org.apache.axiom.om.OMNamespace) namespaceIterator.next();
        returnMap.put(ns.getPrefix(),ns.getNamespaceURI());
        }
        return returnMap;
        }

        private org.apache.axis2.AxisFault createAxisFault(java.lang.Exception e) {
        org.apache.axis2.AxisFault f;
        Throwable cause = e.getCause();
        if (cause != null) {
            f = new org.apache.axis2.AxisFault(e.getMessage(), cause);
        } else {
            f = new org.apache.axis2.AxisFault(e.getMessage());
        }

        return f;
    }

        }//end of class
    