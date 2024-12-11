import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { UserStore } from "../state/user/user.store";
import { catchError, debounceTime, map, Observable, of, switchMap, take, timer } from "rxjs";

export function uniqueNameAsyncValidator(useStore: UserStore): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) return of(null);
    return timer(500).pipe(
      debounceTime(300),
      switchMap(() =>
        useStore.getUsers().pipe(
          take(1),
          map((users) =>
            users.some((user) => user.name.toLowerCase() === control.value.trim().toLowerCase()
            )
              ? { uniqueName: true }
              : null
          ),
          catchError((err) => of(err))
        )
      )
    );
  }
}