
/**
 * PeritosMessageReceiverInOut.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis2 version: 1.6.3  Built on : Jun 27, 2015 (11:17:49 BST)
 */
        package org.example.www.peritos;

        /**
        *  PeritosMessageReceiverInOut message receiver
        */

        public class PeritosMessageReceiverInOut extends org.apache.axis2.receivers.AbstractInOutMessageReceiver{


        public void invokeBusinessLogic(org.apache.axis2.context.MessageContext msgContext, org.apache.axis2.context.MessageContext newMsgContext)
        throws org.apache.axis2.AxisFault{

        try {

        // get the implementation class for the Web Service
        Object obj = getTheImplementationObject(msgContext);

        PeritosSkeleton skel = (PeritosSkeleton)obj;
        //Out Envelop
        org.apache.axiom.soap.SOAPEnvelope envelope = null;
        //Find the axisOperation that has been set by the Dispatch phase.
        org.apache.axis2.description.AxisOperation op = msgContext.getOperationContext().getAxisOperation();
        if (op == null) {
        throw new org.apache.axis2.AxisFault("Operation is not located, if this is doclit style the SOAP-ACTION should specified via the SOAP Action to use the RawXMLProvider");
        }

        java.lang.String methodName;
        if((op.getName() != null) && ((methodName = org.apache.axis2.util.JavaUtils.xmlNameToJavaIdentifier(op.getName().getLocalPart())) != null)){


        

            if("crearPerito".equals(methodName)){
                
                org.example.www.peritos.CrearPeritoResponse crearPeritoResponse13 = null;
	                        org.example.www.peritos.CrearPerito wrappedParam =
                                                             (org.example.www.peritos.CrearPerito)fromOM(
                                    msgContext.getEnvelope().getBody().getFirstElement(),
                                    org.example.www.peritos.CrearPerito.class,
                                    getEnvelopeNamespaces(msgContext.getEnvelope()));
                                                
                                               crearPeritoResponse13 =
                                                   
                                                   
                                                         skel.crearPerito(wrappedParam)
                                                    ;
                                            
                                        envelope = toEnvelope(getSOAPFactory(msgContext), crearPeritoResponse13, false, new javax.xml.namespace.QName("http://www.example.org/peritos/",
                                                    "crearPerito"));
                                    } else 

            if("asignaPerito".equals(methodName)){
                
                org.example.www.peritos.AsignaPeritoResponse asignaPeritoResponse15 = null;
	                        org.example.www.peritos.AsignaPerito wrappedParam =
                                                             (org.example.www.peritos.AsignaPerito)fromOM(
                                    msgContext.getEnvelope().getBody().getFirstElement(),
                                    org.example.www.peritos.AsignaPerito.class,
                                    getEnvelopeNamespaces(msgContext.getEnvelope()));
                                                
                                               asignaPeritoResponse15 =
                                                   
                                                   
                                                         skel.asignaPerito(wrappedParam)
                                                    ;
                                            
                                        envelope = toEnvelope(getSOAPFactory(msgContext), asignaPeritoResponse15, false, new javax.xml.namespace.QName("http://www.example.org/peritos/",
                                                    "asignaPerito"));
                                    } else 

            if("liberarPerito".equals(methodName)){
                
                org.example.www.peritos.LiberarPeritoResponse liberarPeritoResponse17 = null;
	                        org.example.www.peritos.LiberarPerito wrappedParam =
                                                             (org.example.www.peritos.LiberarPerito)fromOM(
                                    msgContext.getEnvelope().getBody().getFirstElement(),
                                    org.example.www.peritos.LiberarPerito.class,
                                    getEnvelopeNamespaces(msgContext.getEnvelope()));
                                                
                                               liberarPeritoResponse17 =
                                                   
                                                   
                                                         skel.liberarPerito(wrappedParam)
                                                    ;
                                            
                                        envelope = toEnvelope(getSOAPFactory(msgContext), liberarPeritoResponse17, false, new javax.xml.namespace.QName("http://www.example.org/peritos/",
                                                    "liberarPerito"));
                                    
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
            private  org.apache.axiom.om.OMElement  toOM(org.example.www.peritos.CrearPerito param, boolean optimizeContent)
            throws org.apache.axis2.AxisFault {

            
                        try{
                             return param.getOMElement(org.example.www.peritos.CrearPerito.MY_QNAME,
                                          org.apache.axiom.om.OMAbstractFactory.getOMFactory());
                        } catch(org.apache.axis2.databinding.ADBException e){
                            throw org.apache.axis2.AxisFault.makeFault(e);
                        }
                    

            }
        
            private  org.apache.axiom.om.OMElement  toOM(org.example.www.peritos.CrearPeritoResponse param, boolean optimizeContent)
            throws org.apache.axis2.AxisFault {

            
                        try{
                             return param.getOMElement(org.example.www.peritos.CrearPeritoResponse.MY_QNAME,
                                          org.apache.axiom.om.OMAbstractFactory.getOMFactory());
                        } catch(org.apache.axis2.databinding.ADBException e){
                            throw org.apache.axis2.AxisFault.makeFault(e);
                        }
                    

            }
        
            private  org.apache.axiom.om.OMElement  toOM(org.example.www.peritos.AsignaPerito param, boolean optimizeContent)
            throws org.apache.axis2.AxisFault {

            
                        try{
                             return param.getOMElement(org.example.www.peritos.AsignaPerito.MY_QNAME,
                                          org.apache.axiom.om.OMAbstractFactory.getOMFactory());
                        } catch(org.apache.axis2.databinding.ADBException e){
                            throw org.apache.axis2.AxisFault.makeFault(e);
                        }
                    

            }
        
            private  org.apache.axiom.om.OMElement  toOM(org.example.www.peritos.AsignaPeritoResponse param, boolean optimizeContent)
            throws org.apache.axis2.AxisFault {

            
                        try{
                             return param.getOMElement(org.example.www.peritos.AsignaPeritoResponse.MY_QNAME,
                                          org.apache.axiom.om.OMAbstractFactory.getOMFactory());
                        } catch(org.apache.axis2.databinding.ADBException e){
                            throw org.apache.axis2.AxisFault.makeFault(e);
                        }
                    

            }
        
            private  org.apache.axiom.om.OMElement  toOM(org.example.www.peritos.LiberarPerito param, boolean optimizeContent)
            throws org.apache.axis2.AxisFault {

            
                        try{
                             return param.getOMElement(org.example.www.peritos.LiberarPerito.MY_QNAME,
                                          org.apache.axiom.om.OMAbstractFactory.getOMFactory());
                        } catch(org.apache.axis2.databinding.ADBException e){
                            throw org.apache.axis2.AxisFault.makeFault(e);
                        }
                    

            }
        
            private  org.apache.axiom.om.OMElement  toOM(org.example.www.peritos.LiberarPeritoResponse param, boolean optimizeContent)
            throws org.apache.axis2.AxisFault {

            
                        try{
                             return param.getOMElement(org.example.www.peritos.LiberarPeritoResponse.MY_QNAME,
                                          org.apache.axiom.om.OMAbstractFactory.getOMFactory());
                        } catch(org.apache.axis2.databinding.ADBException e){
                            throw org.apache.axis2.AxisFault.makeFault(e);
                        }
                    

            }
        
                    private  org.apache.axiom.soap.SOAPEnvelope toEnvelope(org.apache.axiom.soap.SOAPFactory factory, org.example.www.peritos.CrearPeritoResponse param, boolean optimizeContent, javax.xml.namespace.QName methodQName)
                        throws org.apache.axis2.AxisFault{
                      try{
                          org.apache.axiom.soap.SOAPEnvelope emptyEnvelope = factory.getDefaultEnvelope();
                           
                                    emptyEnvelope.getBody().addChild(param.getOMElement(org.example.www.peritos.CrearPeritoResponse.MY_QNAME,factory));
                                

                         return emptyEnvelope;
                    } catch(org.apache.axis2.databinding.ADBException e){
                        throw org.apache.axis2.AxisFault.makeFault(e);
                    }
                    }
                    
                         private org.example.www.peritos.CrearPeritoResponse wrapCrearPerito(){
                                org.example.www.peritos.CrearPeritoResponse wrappedElement = new org.example.www.peritos.CrearPeritoResponse();
                                return wrappedElement;
                         }
                    
                    private  org.apache.axiom.soap.SOAPEnvelope toEnvelope(org.apache.axiom.soap.SOAPFactory factory, org.example.www.peritos.AsignaPeritoResponse param, boolean optimizeContent, javax.xml.namespace.QName methodQName)
                        throws org.apache.axis2.AxisFault{
                      try{
                          org.apache.axiom.soap.SOAPEnvelope emptyEnvelope = factory.getDefaultEnvelope();
                           
                                    emptyEnvelope.getBody().addChild(param.getOMElement(org.example.www.peritos.AsignaPeritoResponse.MY_QNAME,factory));
                                

                         return emptyEnvelope;
                    } catch(org.apache.axis2.databinding.ADBException e){
                        throw org.apache.axis2.AxisFault.makeFault(e);
                    }
                    }
                    
                         private org.example.www.peritos.AsignaPeritoResponse wrapAsignaPerito(){
                                org.example.www.peritos.AsignaPeritoResponse wrappedElement = new org.example.www.peritos.AsignaPeritoResponse();
                                return wrappedElement;
                         }
                    
                    private  org.apache.axiom.soap.SOAPEnvelope toEnvelope(org.apache.axiom.soap.SOAPFactory factory, org.example.www.peritos.LiberarPeritoResponse param, boolean optimizeContent, javax.xml.namespace.QName methodQName)
                        throws org.apache.axis2.AxisFault{
                      try{
                          org.apache.axiom.soap.SOAPEnvelope emptyEnvelope = factory.getDefaultEnvelope();
                           
                                    emptyEnvelope.getBody().addChild(param.getOMElement(org.example.www.peritos.LiberarPeritoResponse.MY_QNAME,factory));
                                

                         return emptyEnvelope;
                    } catch(org.apache.axis2.databinding.ADBException e){
                        throw org.apache.axis2.AxisFault.makeFault(e);
                    }
                    }
                    
                         private org.example.www.peritos.LiberarPeritoResponse wrapLiberarPerito(){
                                org.example.www.peritos.LiberarPeritoResponse wrappedElement = new org.example.www.peritos.LiberarPeritoResponse();
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
        
                if (org.example.www.peritos.AsignaPerito.class.equals(type)){
                
                        return org.example.www.peritos.AsignaPerito.Factory.parse(param.getXMLStreamReaderWithoutCaching());
                    

                }
            
                if (org.example.www.peritos.AsignaPeritoResponse.class.equals(type)){
                
                        return org.example.www.peritos.AsignaPeritoResponse.Factory.parse(param.getXMLStreamReaderWithoutCaching());
                    

                }
            
                if (org.example.www.peritos.CrearPerito.class.equals(type)){
                
                        return org.example.www.peritos.CrearPerito.Factory.parse(param.getXMLStreamReaderWithoutCaching());
                    

                }
            
                if (org.example.www.peritos.CrearPeritoResponse.class.equals(type)){
                
                        return org.example.www.peritos.CrearPeritoResponse.Factory.parse(param.getXMLStreamReaderWithoutCaching());
                    

                }
            
                if (org.example.www.peritos.LiberarPerito.class.equals(type)){
                
                        return org.example.www.peritos.LiberarPerito.Factory.parse(param.getXMLStreamReaderWithoutCaching());
                    

                }
            
                if (org.example.www.peritos.LiberarPeritoResponse.class.equals(type)){
                
                        return org.example.www.peritos.LiberarPeritoResponse.Factory.parse(param.getXMLStreamReaderWithoutCaching());
                    

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
    