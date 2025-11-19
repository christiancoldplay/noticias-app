import { Injectable } from '@angular/core';
import { 
  collection, 
  getDocs, 
  addDoc, 
  deleteDoc, 
  doc,
  onSnapshot,
  query,
  orderBy 
} from 'firebase/firestore';
import { db } from '../../main'; // Importamos la instancia de Firestore
import { Observable } from 'rxjs';

export interface Noticia {
  id?: string;
  titulo: string;
  fecha: string;
  descripcion: string;
  imagen?: string;
  fechaCreacion?: any;
}

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor() { }

  // Obtener todas las noticias 
  getNoticias(): Observable<Noticia[]> {
    return new Observable<Noticia[]>(observer => {
      const noticiasRef = collection(db, 'noticias');
      const q = query(noticiasRef, orderBy('fechaCreacion', 'desc'));
      
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const noticias: Noticia[] = [];
        querySnapshot.forEach((doc) => {
          noticias.push({
            id: doc.id,
            ...doc.data()
          } as Noticia);
        });
        observer.next(noticias);
      }, (error) => {
        observer.error(error);
      });

      // Función de limpieza
      return () => unsubscribe();
    });
  }

  // Agregar nueva noticia
  async agregarNoticia(noticia: Noticia) {
    try {
      const noticiasRef = collection(db, 'noticias');
      const noticiaConFecha = {
        ...noticia,
        fechaCreacion: new Date()
      };
      const docRef = await addDoc(noticiasRef, noticiaConFecha);
      console.log('Noticia agregada con ID:', docRef.id);
      return docRef;
    } catch (error) {
      console.error('Error al agregar noticia:', error);
      throw error;
    }
  }

  // Eliminar noticia
  async eliminarNoticia(id: string) {
    try {
      const noticiaDocRef = doc(db, 'noticias', id);
      await deleteDoc(noticiaDocRef);
      console.log('Noticia eliminada:', id);
    } catch (error) {
      console.error('Error al eliminar noticia:', error);
      throw error;
    }
  }
}